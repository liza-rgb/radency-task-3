import express, { Request, Response } from "express";
import notesRouter from "./routes/notesRoutes";

const app = express();
const port: number = 3000;

app.use(express.json());

app.use('/notes', notesRouter);

app.get('/', (req: Request, res:Response) => {
    return res.send("Hello from Notes App!");
});

app.all('*', (req: Request, res: Response) => {
    return res.send("404");
})

app.listen(port, () => {
    console.log(`Listening on: http://localhost:${port}`);
});