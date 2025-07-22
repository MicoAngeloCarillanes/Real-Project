import Dashboard from '@pages/user/dashboard';
import type { RouteObject } from 'react-router-dom';

export function RouteDashboard(): RouteObject[] {
    return [
        {
            path: 'dashboard',
            element: <Dashboard />
        }
    ];
}