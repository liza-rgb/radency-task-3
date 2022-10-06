import { formatDate, getDatesList } from "./dates";

export function formatNote(note) {
    return {
        id: note.id,
        name: note.name,
        created: formatDate(note.createdAt),
        category: note.Category.name,
        content: note.content,
        datesList: getDatesList(note.content),
        isArchived: note.isArchived            
    }
}