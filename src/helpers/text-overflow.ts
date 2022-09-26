export function formatText(text: string, overflow: number) {
    if (text.length > overflow) {
        return `${text.slice(0, overflow).trim()}...`
    }
    return text;
}