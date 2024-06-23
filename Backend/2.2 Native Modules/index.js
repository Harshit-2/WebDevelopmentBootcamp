const fs = require('fs');

fs.writeFile('message.txt', 'Hello from Angela!', (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});

fs.readFile('./message.txt', 'utf8', function(err, data){
    console.log(data);
});