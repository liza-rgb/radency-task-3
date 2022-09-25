import express, { NextFunction, Request, Response } from "express";
import { ExpressError } from "./routes/ExpressError";
import notesRouter from "./routes/notesRoutes";

const app = express();
const port: number = 3000;

app.use(express.json());

app.use('/notes', notesRouter);

app.get('/', (req: Request, res:Response) => {
    return res.send("Hello from Notes App!");
});

app.get('*', (req: Request, res: Response, next: NextFunction) => {
    next(new ExpressError('Page Not Found', 404));
});

app.all('*', (req: Request, res: Response, next: NextFunction) => {
    next(new ExpressError('This request is not supported', 400));
});

app.use((err: ExpressError, req: Request, res: Response, next: NextFunction) => {
    const { statusCode = 500 } = err;
    if (!err.message) err.message = 'Something went wrong...';
    res.status(statusCode).send(err);
});

app.listen(port, () => {
    console.log(`Listening on: http://localhost:${port}`);
});