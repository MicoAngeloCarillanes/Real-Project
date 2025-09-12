import StudentAccount from '@pages/user/student/account';
import StudentForgotPassword from '@pages/user/student/account/ForgotPassword';
import StudentLogin from '@pages/user/student/account/Login';
import { RouteObject } from 'react-router-dom';

export default function studentAccountRoute(): RouteObject[] {
    return [
        {
            path: 'account/',
            element: <StudentAccount />,
            children: [
                {
                    element: <StudentLogin />,
                    path:'login'
                },
                {
                    element: <StudentForgotPassword />,
                    path:'forgot-password'
                }
            ]
        }
    ];
}