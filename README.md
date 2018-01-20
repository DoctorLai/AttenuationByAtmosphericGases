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

## Author
* © justyy, Released under the [MIT License](http://spdx.org/licenses/MIT.html).
* Authored and maintained by [@justyy](https://steemit.com/@justyy) with help from contributors ([list](https://www.npmjs.com/package/attenuationbyatmosphericgases/access)).
    * Email: dr.zhihua.lai@gmail.com
    * Github: [github.com/doctorlai](https://github.com/doctorlai)
    * Twitter: [doctorzlai](https://twitter.com/doctorzlai)
    * Blog: [helloacm](https://helloacm.com)
    * Blog: [codingforspeed](https://codingforspeed.com)
    * Blog: [justyy](https://justyy.com)
    * Others: [weibomiaopai](https://weibomiaopai.com)
    * Others: [rot47](https://rot47.net)
    * Others: [uploadbeta](https://uploadbeta.com)
    * Others: [isvbscriptdead](https://isvbscriptdead.com)
    * Others: [happyukgo](https://happyukgo.com)
    * Others: [propagationtools](https://propagationtools.com)
    * Others: [steakovercooked](https://steakovercooked.com)
