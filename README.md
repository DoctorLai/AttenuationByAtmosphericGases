# AttenuationByAtmosphericGases
Compute the Oxygen and Water Vapour as described in ITU-R P.676-9 document (International Telecommunication Union)  https://www.itu.int/dms_pubrec/itu-r/rec/p/R-REC-P.676-9-201202-S!!PDF-E.pdf

## Installation
```
npm install attenuationbyatmosphericgases
```

## Usage
```
var GetAirAttenuation = require('attenuationbyatmosphericgases').GetAirAttenuation;
var GetWaterAttenuation = require('attenuationbyatmosphericgases').GetWaterAttenuation;
let freq = 60; // 60 GHz
let temperature = 20; // 20 degree
let pressure = 1000; // hpa
console.log(GetAirAttenuation(freq, temperature, pressure));
console.log(GetWaterAttenuation(10, 15, 1013, 7.5));
```

Output:
```
14.200501629257202
0.28112047608612034
```

## Tests
```
npm test
```

## Contributing
1. Fork it!
2. Create your feature branch: git checkout -b my-new-feature
3. Commit your changes: git commit -am 'Add some feature'
4. Push to the branch: git push origin my-new-feature
5. Submit a pull request :D
