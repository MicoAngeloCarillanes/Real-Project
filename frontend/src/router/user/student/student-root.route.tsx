import StudentMainLayout from '@pages/user/student/StudentMainLayout';
import StudentAccountRoute from '@router/user/student/account/account.route';
import StudentChatRoute from '@router/user/student/chat/chat.route';
import StudentCourseRoute from '@router/user/student/course/course.route';
import StudentDashboardRoute from '@router/user/student/dashboard/dashboard.route';
import StudentSettingsRoute from '@router/user/student/settings/settings.route';
import { RouteObject } from 'react-router-dom';

export default function StudentRoute(): RouteObject[] {
    return [
        {
            path: 'student/',
            element: <StudentMainLayout />,
            children: [
                ...StudentAccountRoute(),
                ...StudentDashboardRoute(),
                ...StudentCourseRoute(),
                ...StudentSettingsRoute(),
                ...StudentChatRoute()
            ]
        }
    ];
}