import { NextFunction, Request, Response } from "express";

export default function wrapAsync(func: Function) {
    return (req: Request, res: Response, next: NextFunction) => {
        func(req, res, next).catch(next);
    }
}