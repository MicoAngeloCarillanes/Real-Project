import StudentDashboard from '@pages/user/student/dashboard';
import { RouteObject } from 'react-router-dom';

export default function studentDashboardRoute(): RouteObject[] {
    return [
        {
            path: 'dashboard',
            element: <StudentDashboard />
        }
    ];
}