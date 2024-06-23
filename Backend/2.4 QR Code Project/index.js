/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

const questions = [
    {
        type: "input",
        name: "url",
        message: "Enter url:",
    },
];

inquirer.prompt(questions).then((answers) => {
    fs.writeFileSync("./url.txt", answers.url);
    const qrImage = qr.imageSync(answers.url, { type: "png" });
    fs.writeFileSync("./qr-code.png", qrImage);
});
