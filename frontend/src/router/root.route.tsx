import Root from '@pages/Root';
import { RouteObject } from 'react-router-dom';
import StudentRoute from '@router/user/student/student-root.route';

export default function RouteRoot(): RouteObject[] {
    return [
        {
            path: '/',
            element: <Root />,
            children: [
                ...StudentRoute()
            ]
        }
    ];
}