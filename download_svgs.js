const https = require('https');
const fs = require('fs');

function fetchSVG(pageUrl, name) {
  const options = { headers: { 'User-Agent': 'BD-Payment-Agent/1.0 (moksedul@example.com)' } };
  https.get(pageUrl, options, res => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      // Find the URL to the original SVG file
      const match = data.match(/href="([^"]+upload\.wikimedia\.org\/wikipedia\/[^"]+\.svg)"/i);
      if (match) {
        let svgUrl = match[1];
        if (svgUrl.startsWith('//')) {
          svgUrl = 'https:' + svgUrl;
        }
        
        console.log(`Found SVG URL for ${name}: ${svgUrl}`);
        
        https.get(svgUrl, options, res2 => {
          let svg = '';
          res2.on('data', c => svg += c);
          res2.on('end', () => {
            fs.writeFileSync(name, svg);
            console.log(`Saved ${name} (${svg.length} bytes)`);
          });
        }).on('error', e => console.error(e));
      } else {
        console.log('No match for', name);
      }
    });
  }).on('error', e => console.error(e));
}

fetchSVG('https://en.wikipedia.org/wiki/File:BKash_Logo.svg', 'bkash.svg');
fetchSVG('https://en.wikipedia.org/wiki/File:Nagad_Logo_2020.svg', 'nagad.svg');
