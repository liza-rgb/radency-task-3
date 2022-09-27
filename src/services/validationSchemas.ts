import * as yup from "yup";

const categoryNames = ['Task', 'Random Thought', 'Idea', 'Quote'];

export const addNoteBodySchema = yup.object({
    name: yup.string().min(1).required("Please provide a name of note."),
    category: yup.string()
        .oneOf(categoryNames, "Category must be one of following: Task, Random Thought, Idea or Quote.")
        .required("Please provide a category of note."),
    content: yup.string().min(1)
        .required("Please provide a content of note.")
}).strict().noUnknown(true);

yup.addMethod(yup.object, 'atLeastOneOf', function(list: string[]) {
    return this.test({
      name: 'atLeastOneOf',
      message: 'Object must have at least one of these keys: ${keys}',
      exclusive: true,
      params: { keys: list.join(', ') },
      test: value => value == null || list.some(f => value[f] != null)
    })
  })

export const editNoteBodySchema = yup.object({
    name: yup.string().min(1),
    category: yup.string()
            .oneOf(categoryNames, "Category must be one of following: Task, Random Thought, Idea or Quote."),
    content: yup.string().min(1),
    isArchived: yup.boolean()
}).atLeastOneOf(['name', 'category', 'content', 'isArchived']).strict().noUnknown(true);

export const uuidSchema = yup.object({
    id: yup.string().required("Please provide a content the id of note.").uuid()
}).strict().noUnknown(true);

export const emptySchema = yup.object({}).strict().noUnknown(true);

export type AddNoteBodySchema = typeof addNoteBodySchema;
export type EditNoteBodySchema = typeof editNoteBodySchema;
export type UuidSchema = typeof uuidSchema;
export type EmptySchema = typeof emptySchema;