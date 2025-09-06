import StudentChat from '@pages/user/student/chat';
import type { RouteObject } from 'react-router-dom';

export default function StudentChatRoute(): RouteObject[] {
    return [
        {
            path: 'chat',
            element: <StudentChat />
        }
    ];
}