import express from 'express';
const PORT = process.env.PORT || 8080;
const app = express();


app.get('/:username/messages', (req, res) => {
    console.log(req.params);
    res.end();
})

app.get('/:username/messages/:messageId', (req, res) => {
    let username = req.params.username;
    let messageId = req.params.messageId;
    console.log('MessageId: ' + messageId + ". User: " + username);
    res.end();
})

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(PORT, () => {
    console.log(`Basic Express App - listening port: ${PORT}`);
}); 