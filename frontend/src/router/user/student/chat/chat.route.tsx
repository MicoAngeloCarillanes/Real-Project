import StudentChat from '@pages/user/student/chat';
import { RouteObject } from 'react-router-dom';

export default function studentChatRoute(): RouteObject[] {
    return [
        {
            path: 'chats',
            element: <StudentChat />
        }
    ];
}