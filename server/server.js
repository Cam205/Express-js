const express = require('express')
const path = require('path');
let app = express();

app.use((req, res, next) => {
    console.log(`The requested Original URL was ${req.originalUrl}`);
    console.log(`The requested URL was ${req.url}`);
    next()
})

app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res,) => {
    res.send('Hello from the web server side')
})


app.listen(3000)