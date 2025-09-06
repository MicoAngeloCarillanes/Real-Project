import StudentSettings from '@pages/user/student/settings';
import type { RouteObject } from 'react-router-dom';

export default function StudentSettingsRoute(): RouteObject[] {
    return [
        {
            path: 'settings',
            element: <StudentSettings />
        }
    ];
}