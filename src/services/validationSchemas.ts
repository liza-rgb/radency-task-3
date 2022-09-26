import * as yup from "yup";

const categoryNames = ['Task', 'Random Thought', 'Idea', 'Quote'];

export const addNoteBodySchema = yup.object({
    name: yup.string().required(),
    category: yup.string().oneOf(categoryNames).required(),
    content: yup.string().required()
}).strict().noUnknown(true);

export const editNoteBodySchema = yup.object({
    name: yup.string().trim().required(),
    category: yup.string().oneOf(categoryNames).required(),
    content: yup.string().trim().required(),
    isArchived: yup.boolean().required()
}).strict().noUnknown(true);;

export const uuidSchema = yup.object({
    id: yup.string().required().uuid()
}).strict().noUnknown(true);;

export const emptySchema = yup.object({}).strict().noUnknown(true);

export type AddNoteBodySchema = typeof addNoteBodySchema;
export type EditNoteBodySchema = typeof editNoteBodySchema;
export type UuidSchema = typeof uuidSchema;
export type EmptySchema = typeof emptySchema;