import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

export default function Root() {
    const location = useLocation();
    const navigate = useNavigate();
    
    useEffect(() => {
        if (location.pathname === '/') {
            navigate('/student');
        }
    }, [location.pathname]);

    return (
        <>
            <Outlet />
        </>
    );
};