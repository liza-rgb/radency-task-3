import express, { NextFunction, Request, Response } from 'express';
import { AddNoteBodySchema,
    EditNoteBodySchema,
    UuidSchema,
    EmptySchema } from '../services/validationSchemas';
import { ExpressError } from './ExpressError';

export const validateRequest = 
    (bodySchema: AddNoteBodySchema | EditNoteBodySchema | EmptySchema,
        querySchema: EmptySchema,
        paramsSchema: UuidSchema | EmptySchema) => 
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            await bodySchema.validate(req.body);
            await querySchema.validate(req.query);
            await paramsSchema.validate(req.params);
            next();
        } catch (err: any) {
            return res.status(400).send(err.message);
        }
}
