import express, { Request, Response } from "express";

const app = express();
const port: number = 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    return res.send("Hello, world!");
});

app.listen(port, () => {
    console.log(`Listening on: http://localhost:${port}`);
});