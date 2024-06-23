//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from 'express';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

const day = new Date();
const temp = day.getDay();

var dayType = 'Weekday';
var toDo = 'work hard';
// Sunday - Saturday : 0 - 6

if (temp === 0 || temp === 6) {
    dayType = 'Weekend';
    toDo = 'have some fun';
}

app.get('/', (req, res) => {
    res.render(__dirname + '/views/index.ejs', { dayType: dayType, toDo: toDo});
    
});

app.listen(port, () => {
    console.log(`Listening on port ${port}.`);
});
