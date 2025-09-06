import StudentDashboard from '@pages/user/student/dashboard';
import type { RouteObject } from 'react-router-dom';

export default function StudentDashboardRoute(): RouteObject[] {
    return [
        {
            path: 'dashboard',
            element: <StudentDashboard />
        }
    ];
}