import Root from '@pages/Root';
import { RouteObject } from 'react-router-dom';
import RouteAccount from '@router/user/account/account.route';
import RouteMainLayout from '@router/user/main.route';

export default function RouteRoot(): RouteObject[] {
    return [
        {
            path: '/',
            element: <Root />,
            children: [
                ...RouteAccount(),
                ...RouteMainLayout()
            ]
        }
    ];
}