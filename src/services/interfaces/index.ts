export interface Note {
    id: string;
    created: Date;
    name: string,
    category: string;
    content: string;
    isArchived: boolean;
}