import express from 'express';
const app = express();
const PORT = process.env.PORT;


function middleware1(req, res, next) {
    console.log('Middleware 1 Start');
    res.send('Send1');
    next();
    console.log('Middleware1 1 End');
}

function middleware2(req, res, next) {
    console.log('Middleware 2 Start');
    res.send('Send2');
    next();
    console.log('Middleware1 2 End');
}


function middleware3(req, res, next) {
    console.log('Middleware 3 Start');
    res.send('Send3');
    next();
    console.log('Middleware1 3 End');
}


app.use(middleware1);
app.use(middleware2);
app.use(middleware3);

app.listen(PORT, () => {
    console.log(`Server is running on: ${PORT}`);
})
