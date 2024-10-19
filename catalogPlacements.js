const fs = require('fs');

function decodeValue(value, base) {
    return parseInt(value, base);
}

function lagrangeInterpolation(points) {
    let constant = 0;

    for (let i = 0; i < points.length; i++) {
        let xi = points[i][0];
        let yi = points[i][1];
        let li = 1;
        for (let j = 0; j < points.length; j++) {
            if (i !== j) {
                let xj = points[j][0];
                li *= (-xj) / (xi - xj);
            }
        }
        constant += yi * li;
    }

    return Math.round(constant);
}

function processInput(jsonInput) {
    const n = jsonInput.keys.n;
    const k = jsonInput.keys.k;

    let points = [];

    let count = 0;
    for (let key in jsonInput) {
        if (key === 'keys') continue;
        let x = parseInt(key);
        let base = parseInt(jsonInput[key].base);
        let value = jsonInput[key].value;

        let y = decodeValue(value, base);
        points.push([x, y]);
        count++;
        if (count === k) break;
    }
    const secret = lagrangeInterpolation(points);
    return secret;
}

fs.readFile('input1.json', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    const jsonInput1 = JSON.parse(data);
    const secret1 = processInput(jsonInput1);

    console.log("Secret for Test Case 1:", secret1);
});

fs.readFile('input2.json', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    const jsonInput2 = JSON.parse(data);
    const secret2 = processInput(jsonInput2);

    console.log("Secret for Test Case 2:", secret2);
});
