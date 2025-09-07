export function normalizePath(path: string): string {
    return path
        .replace(/\/{2,}/g, '/')
        .replace(/-{2,}/g, '-')
        .replace(/\/$/, '');
}