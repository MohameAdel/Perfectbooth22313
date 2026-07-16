const https = require('https');
const fs = require('fs');

https.get('https://vavgrup.com/', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    fs.writeFileSync('scratch/vav.html', data);
    console.log('Saved to scratch/vav.html');
  });
}).on("error", (err) => {
  console.log("Error: " + err.message);
});
