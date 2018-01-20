'use strict';
/*
    Attenuation by atmospheric gases
    Reference: Rec. ITU-R P.676-9 
    URL: https://www.itu.int/dms_pubrec/itu-r/rec/p/R-REC-P.676-9-201202-S!!PDF-E.pdf
    License: MIT
*/

const phi = (rp, rt, a, b, c, d) => {
    return Math.pow(rp, a) * Math.pow(rt, b) * Math.exp(c * (1 - rp) + d * (1 - rt));
}

const airAttenuationLessThan54Ghz = (t, f, p) => {
    const rp = p / 1013;
    const rt = 288 / (273 + t);
    const x1 = phi(rp, rt, 0.0717, -1.8132, 0.0156, -1.6515);
    const x2 = phi(rp, rt, 0.5146, -4.6368, -0.1921, -5.7416);
    const x3 = phi(rp, rt, 0.3414, -6.5851, 0.2130, -8.5854);
    return (7.2 * Math.pow(rt, 2.8) / (f * f + 0.34 * rp * rp * Math.pow(rt, 1.6)) + (0.62 * x3) / (Math.pow(54 - f, 1.16 * x1) + 0.83 * x2)) * Math.pow(f, 2) * Math.pow(rp, 2) * 0.001;
}

const airAttenuationLessThan60Ghz = (t, f, p) => {
    const rp = p / 1013;
    const rt = 288 / (273 + t);
    const r54 = 2.192 * phi(rp, rt, 1.8286, 1.9487, 0.4051, 2.8509);
    const r58 = 12.59 * phi(rp, rt, 1.0045, 3.5610, 0.1588, 1.2834);
    const r60 = 15.0  * phi(rp, rt, 0.9003, 4.1335, 0.0427, 1.6088);    
    return Math.exp(Math.log(r54) / 24 * (f - 58) * (f - 60) - Math.log(r58) / 8 * (f - 54) * (f - 60) + Math.log(r60) / 12 * (f -54) * (f - 58));
}

const airAttenuationLessThan62Ghz = (t, f, p) => {
    const rp = p / 1013;
    const rt = 288 / (273 + t);
    const r60 = 15.0  * phi(rp, rt, 0.9003, 4.1335, 0.0427, 1.6088);
    const r62 = 14.28  * phi(rp, rt, 0.9886, 3.4176, 0.1827, 1.3429);
    return r60 + (r62 - r60) * (f - 60) * 0.5;
}

const airAttenuationLessThan66Ghz = (t, f, p) => {
    const rp = p / 1013;
    const rt = 288 / (273 + t);    
    const r62 = 14.28  * phi(rp, rt, 0.9886, 3.4176, 0.1827, 1.3429);
    const r64 = 6.819  * phi(rp, rt, 1.4320, 0.6258, 0.3177, 0.5914);
    const r66 = 1.908  * phi(rp, rt, 2.0717, 4.1404, 0.4910, 4.8718);
    return Math.exp(Math.log(r62) / 8 * (f - 64) * (f - 66) - Math.log(r64) / 4 * (f - 62) * (f - 66) + Math.log(r66) / 8 * (f - 62) * (f - 64));
}

const airAttenuationLessThan120Ghz = (t, f, p) => {
    const rp = p / 1013;
    const rt = 288 / (273 + t);    
    const xi4 = phi(rp, rt, -0.0112, 0.0092, -0.1033, -0.0009);
    const xi5 = phi(rp, rt, 0.2705, -2.7192, -0.3016, -4.1033);
    const xi6 = phi(rp, rt, 0.2445, -5.9191, 0.0422, -8.0719);
    const xi7 = phi(rp, rt, -0.1833, 6.5589, -0.2402, 6.131);
    return (3.02 * 1e-4 * Math.pow(rt, 3.5) + 
            0.283 * Math.pow(rt, 3.8) / (Math.pow(f - 118.75, 2) + 2.91 * Math.pow(rp, 2) * Math.pow(rt, 1.6)) + 
            0.502 * xi6 * (1 - 0.016 * xi7 * (f - 66)) / (Math.pow(f - 66, 1.4346 * xi4) + 1.15 * xi5)) * f * f * rp * rp * 1e-3;
}

const airAttenuationLessThan350Ghz = (t, f, p) => {
    const rp = p / 1013;
    const rt = 288 / (273 + t);    
    const xi = -0.00306 * phi(rp, rt, 3.211, -14.94, 1.583, -16.37);
    return (3.02 * 1e-4 / (1 + 1.9 * 1e-5 * Math.pow(f, 1.5)) + 
            0.283 * Math.pow(rt, 0.3) / (Math.pow(f - 118.75, 2) + 2.91 * rp * rp * Math.pow(rt, 1.6))) 
            * f * f * rp * rp * Math.pow(rt, 3.5) * 1e-3 + xi;
}

const GetAirAttenuation = (frequency, temperature, pressure) => {
    if ((frequency <= 0) || (frequency > 350)) {
        throw "Frequency Not Supported";
    }
    if (frequency <= 54) {
        return airAttenuationLessThan54Ghz(temperature, frequency, pressure);
    }
    if (frequency <= 60) {
        return airAttenuationLessThan60Ghz(temperature, frequency, pressure);
    }
    if (frequency <= 62) {
        return airAttenuationLessThan62Ghz(temperature, frequency, pressure);
    }
    if (frequency <= 66) {
        return airAttenuationLessThan66Ghz(temperature, frequency, pressure);
    }
    if (frequency <= 120) {
        return airAttenuationLessThan120Ghz(temperature, frequency, pressure);
    }
    return airAttenuationLessThan350Ghz(temperature, frequency, pressure);
}

module.exports = {
    GetAirAttenuation
}

