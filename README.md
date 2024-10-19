```markdown
# Catalog Placements Assignment - Shamir's Secret Sharing Algorithm

## Overview

This project implements a simplified version of Shamir's Secret Sharing algorithm. The goal is to find the constant term `c` of an unknown polynomial using the provided test cases in JSON format. The program uses Lagrange interpolation to calculate the constant term from the given encoded points.

### Key Steps:
1. Parse the input from JSON files.
2. Decode the y-values from different bases.
3. Apply Lagrange interpolation to find the constant term `c`.

## Prerequisites

- You must have **Node.js** installed on your machine to run the JavaScript code.

To check if you have Node.js installed, run:

```bash
node -v
```

If Node.js is not installed, you can download it from [here](https://nodejs.org/).

## Installation

1. Clone this repository to your local machine:

```bash
git clone <repository_url>
```

2. Navigate to the project directory:

```bash
cd <repository_name>
```

## Input Files

You need to have two JSON input files to run the program:

- `input1.json`
- `input2.json`

The input files should contain the test cases provided in the assignment. Ensure that both files are located in the same directory as the script.

### Example of input1.json:

```json
{
    "keys": {
        "n": 4,
        "k": 3
    },
    "1": {
        "base": "10",
        "value": "4"
    },
    "2": {
        "base": "2",
        "value": "111"
    },
    "3": {
        "base": "10",
        "value": "12"
    },
    "6": {
        "base": "4",
        "value": "213"
    }
}
```

### Example of input2.json:

```json
{
    "keys": {
        "n": 10,
        "k": 7
    },
    "1": {
        "base": "6",
        "value": "13444211440455345511"
    },
    "2": {
        "base": "15",
        "value": "aed7015a346d63"
    },
    "3": {
        "base": "15",
        "value": "6aeeb69631c227c"
    },
    "4": {
        "base": "16",
        "value": "e1b5e05623d881f"
    },
    "5": {
        "base": "8",
        "value": "316034514573652620673"
    },
    "6": {
        "base": "3",
        "value": "2122212201122002221120200210011020220200"
    },
    "7": {
        "base": "3",
        "value": "20120221122211000100210021102001201112121"
    },
    "8": {
        "base": "6",
        "value": "20220554335330240002224253"
    },
    "9": {
        "base": "12",
        "value": "45153788322a1255483"
    },
    "10": {
        "base": "7",
        "value": "1101613130313526312514143"
    }
}
```

## How to Run

1. Ensure that both input files (`input1.json` and `input2.json`) are located in the project directory.
2. Run the program using Node.js:

```bash
node catalogPlacements.js
```

## Output

After running the program, it will display the secret for both test cases in the console. The output will look like this:

```
Secret for Test Case 1: <calculated_secret_1>
Secret for Test Case 2: <calculated_secret_2>
```

## Files

- `catalogPlacements.js`: The main JavaScript file that contains the logic for reading inputs, decoding values, and applying Lagrange interpolation.
- `input1.json`: The first test case in JSON format.
- `input2.json`: The second test case in JSON format.

## Notes

- Ensure that the input files are formatted correctly as shown in the examples above.
- The program requires at least `k` points (roots) from the input to solve for the constant term `c`.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```

### How to Use:

1. **Add the README.md file** to your project directory.
2. **Update the repository URL** in the `git clone` section to your actual repository URL.
3. **Run the commands** as outlined in the "How to Run" section to test the program locally.

This README provides clear instructions on how to run the program and understand its purpose.
