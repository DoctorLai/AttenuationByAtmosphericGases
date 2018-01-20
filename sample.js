var GetAirAttenuation = require('attenuationbyatmosphericgases').GetAirAttenuation;
var GetWaterAttenuation = require('attenuationbyatmosphericgases').GetWaterAttenuation;
let freq = 60; // 60 GHz
let temperature = 20; // 20 degree
let pressure = 1000; // hpa
console.log(GetAirAttenuation(freq, temperature, pressure)); // output 14.200501629257202
console.log(GetWaterAttenuation(10, 15, 1013, 7.5)); // output 0.28112047608612034
