import express from 'express';
import authorRouter from './routes/authorRouter.js';
import bookRouter from './routes/bookRouter.js';
const PORT = process.env.PORT;
const app = express();

app.use('/authors', authorRouter);
app.use('/books', bookRouter);

app.listen(PORT, () => {
    console.log(`Express app is listening on port: ${PORT}`);
});