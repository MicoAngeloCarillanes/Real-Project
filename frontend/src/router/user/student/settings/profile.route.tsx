import StudentProfile from '@pages/user/student/profile';

import type { RouteObject } from 'react-router-dom';

export default function StudentProfileRoute(): RouteObject[] {
    return [
        {
            path: 'profile',
            element: <StudentProfile />
        }
    ];
}