import MainLayout from '@pages/user/MainLayout';
import { RouteObject } from 'react-router-dom';
import { RouteDashboard } from './dashboard/dashboard.route';

export default function RouteMainLayout(): RouteObject[] {
    return [
        {
            path: 'student/',
            element: <MainLayout />,
            children: [
                ...RouteDashboard()
            ]
        }
    ];
}