import StudentMainLayout from '@pages/user/student/StudentMainLayout';
import StudentAccountRoute from '@router/user/student/account/student-account.route';
import StudentDashboardRoute from '@router/user/student/dashboard/student-dashboard.route';
import { RouteObject } from 'react-router-dom';

export default function StudentRoute(): RouteObject[] {
    return [
        {
            path: 'student/',
            element: <StudentMainLayout />,
            children: [
                ...StudentAccountRoute(),
                ...StudentDashboardRoute()
            ]
        }
    ];
}