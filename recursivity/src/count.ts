export function countItems(items: string[]) : number {
    if (items.length === 0) return 0;
    return 1 + countItems(items.splice(1, items.length - 1));
}