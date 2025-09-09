import StudentProfile from '@pages/user/student/settings';

import type { RouteObject } from 'react-router-dom';

export default function StudentProfileRoute(): RouteObject[] {
    return [
        {
            path: 'profile',
            element: <StudentProfile />
        }
    ];
}