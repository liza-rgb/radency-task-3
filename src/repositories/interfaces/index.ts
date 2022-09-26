export interface Note {
    id: string;
    created: Date;
    name: string,
    category: CategoryName;
    content: string;
    isArchived: boolean;
}

export interface NoteFormatted {
    id: string;
    created: string;
    name: string,
    category: CategoryName;
    content: string;
    datesList: string,
    isArchived: boolean;
}

export type CategoryName = "Task" | "Random Thought" | "Idea" | "Quote";

export interface Category {
    name: CategoryName;
    iconClass: string;
}

export interface CategoryStats {
    category: CategoryName;
    active: number;
    archived: number;
}