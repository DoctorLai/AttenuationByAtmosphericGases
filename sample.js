var GetAirAttenuation = require('attenuationbyatmosphericgases').GetAirAttenuation;
let freq = 60; // 60 GHz
let temperature = 20; // 20 degree
let pressure = 1000; // hpa
console.log(GetAirAttenuation(freq, temperature, pressure)); // output 14.200501629257202
