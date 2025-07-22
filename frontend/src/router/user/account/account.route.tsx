import type { RouteObject } from 'react-router-dom';
import Login from '@pages/user/account/Login';
import ForgotPassword from '@pages/user/account/ForgotPassword';
import Account from '@pages/user/account';

export default function RouteAccount(): RouteObject[] {
    return [
        {
            path: 'account/',
            element: <Account />,
            children: [
                { path:'login' , element: <Login /> },
                { path:'forgot-password' , element: <ForgotPassword /> }
            ]
        }
    ];
}