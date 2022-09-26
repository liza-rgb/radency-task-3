import * as yup from "yup";

const categoryNames = ['Task', 'Random Thought', 'Idea', 'Quote'];

export const addNoteBodySchema = yup.object({
    name: yup.string().required("Please provide a name of note."),
    category: yup.string()
        .oneOf(categoryNames, "Category must be one of following: Task, Random Thought, Idea or Quote.")
        .required("Please provide a category of note."),
    content: yup.string()
        .required("Please provide a content of note.")
}).strict().noUnknown(true);

export const editNoteBodySchema = yup.object({
    name: yup.string().required("Please provide a name of note."),
    category: yup.string()
            .oneOf(categoryNames, "Category must be one of following: Task, Random Thought, Idea or Quote.")
            .required(),
    content: yup.string().required("Please provide a content of note."),
    isArchived: yup.boolean()
            .required("Please provide a status of note (0 = active, 1 = archived).")
}).strict().noUnknown(true);;

export const uuidSchema = yup.object({
    id: yup.string().required("Please provide a content the id of note.").uuid()
}).strict().noUnknown(true);;

export const emptySchema = yup.object({}).strict().noUnknown(true);

export type AddNoteBodySchema = typeof addNoteBodySchema;
export type EditNoteBodySchema = typeof editNoteBodySchema;
export type UuidSchema = typeof uuidSchema;
export type EmptySchema = typeof emptySchema;