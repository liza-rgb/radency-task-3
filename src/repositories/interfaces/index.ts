export interface Note {
    id: string;
    created: Date;
    name: string,
    category: string;
    content: string;
    isArchived: boolean;
}

export interface NoteFormatted {
    id: string;
    created: string;
    name: string,
    category: string;
    content: string;
    datesList: string,
    isArchived: boolean;
}

export interface CategoryStats {
    category: string;
    active: number;
    archived: number;
}