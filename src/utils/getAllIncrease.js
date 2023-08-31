const fs = require('fs');

fs.readFileSync('.src/utils/allTokens.json', 'utf8', (err, data) => {
    if (err) throw err;
    let tokens = []
    for (let i = 0; i < data.length; i++) {
        if (data[i].platforms.ethereum)

            tokens.push(data[i])
    }
    fs.writeFileSync('./allIncreaseTokens.json', JSON.stringify(tokens), 'utf8');
});