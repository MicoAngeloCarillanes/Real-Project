import { useMemo, useState } from 'react';
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
    // State variables
    const [basePath, setBasePath] = useState('/student');
    // Custom variables
    const pathname = location.pathname;
    const isValidBasePath = Boolean(basePath);
    const isRoot = isValidBasePath && pathname === basePath;
    const isPath = isValidBasePath && pathname.startsWith(basePath);
    const renderOutlet = !isRoot && isPath;
    const secondaryPath = useMemo(
        () => handleSecondaryPath(pathname),
        [pathname]
    );

    function handleSecondaryPath(pathname: string) {
        const parts = pathname
            .split('/')
            .filter(Boolean);

        return parts[1];
    }

    return {
        pathname,
        renderOutlet,
        secondaryPath,
        setBasePath
    };
}