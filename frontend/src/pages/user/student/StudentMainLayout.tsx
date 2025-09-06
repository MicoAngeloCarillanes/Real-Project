
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import MainSidebar from '@components/MainSidebar';
import SubSidebar from '@components/SubSidebar';
import { useEffect } from 'react';

export default function StudentMainLayout() {
    // Hooks
    const location = useLocation();
    const navigate = useNavigate();
    // Custom variables
    const userName = true;
    const accountPaths = ['/student/account/login', '/student/account/forgot-password'];
    const isAccountPath = accountPaths.includes(location.pathname);
    const isAccountPathStarter = location.pathname.startsWith('/student/account');
    const accountCondition = !userName && isAccountPath;
    const mainContentCondition = userName && !isAccountPathStarter;
    const normalizedPath = location.pathname.replace(/\/+$/, '') || '/';
    const isStudentRootPath = normalizedPath === '/student';

    useEffect(() => {
        if (!userName && !isAccountPath) {
            navigate('/student/account/login');
        } else if (userName && (isAccountPathStarter || isStudentRootPath)) {
            navigate('/student/dashboard');
        }
    }, [userName, navigate]);

    return(
        <>
            {accountCondition ? (
                <Outlet />
            ) : mainContentCondition ? (
                <div className="flex min-h-screen py-[25px] w-full">
                    <div className="flex-none w-[275px]">
                        <MainSidebar />
                    </div>
                    <main className="flex-1 mt-[25px]">
                        <Outlet />
                    </main>
                    <div className="flex-none w-[268px]">
                        <SubSidebar />
                    </div>
                </div>
            ) : null}
        </>
    );
}