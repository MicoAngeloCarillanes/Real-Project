import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RouteRoot from '@router/root.route';

export default function App() {
    const router = createBrowserRouter(RouteRoot());

    return <RouterProvider router={router} />;
}