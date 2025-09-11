import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

export function normalizePath(path: string): string {
    return path
        .replace(/\/{2,}/g, '/')
        .replace(/-{2,}/g, '-')
        .replace(/\/$/, '');
}

export function usePath() {
    // Hooks
    const location = useLocation();
    // Custom variables
    const pathname = location.pathname;
    const basePath = useMemo(() => getBasePath(pathname), [pathname]);
    const isValidBasePath = Boolean(basePath);
    const isRoot = isValidBasePath && pathname === basePath;
    const isPath = isValidBasePath && pathname.startsWith(basePath);
    const studentRoot = '/student';

    function getBasePath(pathname: string) {
        const parts = pathname.split('/')
            .filter(Boolean);

        return parts[0] === 'student' ? `/student/${parts[1]}` : '';
    }

    return {
        pathname,
        isRoot,
        isPath,
        studentRoot
    };
}