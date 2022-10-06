export interface NoteFormatted {
    id: string;
    created: string;
    name: string,
    category: string;
    content: string;
    datesList: string,
    isArchived: boolean;
}

export interface Statistics {
    category: string;
    active: number;
    archived: number;
}