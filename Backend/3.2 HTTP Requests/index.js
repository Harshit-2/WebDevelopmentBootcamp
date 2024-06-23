import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) =>{
    console.log(req.rawHeaders);
    res.send('<h1>Hello World</h1>');
});

app.get('/about', (req, res) =>{
    res.send("about Page")
});

app.get('/contact', (req, res) =>{
    res.send("contact Page")
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})