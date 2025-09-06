import type { RouteObject } from 'react-router-dom';
import StudentLogin from '@pages/user/student/account/Login';
import StudentForgotPassword from '@pages/user/student/account/ForgotPassword';
import StudentAccount from '@pages/user/student/account';

export default function StudentAccountRoute(): RouteObject[] {
    return [
        {
            path: 'account/',
            element: <StudentAccount />,
            children: [
                { path:'login' , element: <StudentLogin /> },
                { path:'forgot-password' , element: <StudentForgotPassword /> }
            ]
        }
    ];
}