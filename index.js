import http from 'http';
import url from 'url';
import path from 'path';
import fs from 'fs/promises';
const PORT = process.env.PORT;

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = http.createServer(async (req, res) => {
    try {
        let filePath;
        if (req.method === 'GET' && req.url === '/') {
            filePath = path.join(__dirname, 'public', 'index.html');
        } else if (req.method === 'GET' && req.url === '/about') {
            filePath = path.join(__dirname, 'public', 'about.html');
        } else if (req.method === 'GET' && req.url === '/contact-me') {
            filePath = path.join(__dirname, 'public', 'contact-me.html');
        } else {
            filePath = path.join(__dirname, 'public', '404.html');
        }
        const page = await fs.readFile(filePath);
        res.setHeader('Content-Type', 'text/html');
        res.write(page);
        res.end();
    } catch (error) {
        res.writeHead(500, {'Content-Type': 'text/html'})
        res.end();
        console.error(error);
    }
})

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})