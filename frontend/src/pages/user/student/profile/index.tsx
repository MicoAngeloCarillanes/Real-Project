import AssignedCourse from '@pages/user/student/profile/AssignedCourse';
import PersonalDetail from '@pages/user/student/profile/PersonalDetail';
import { usePath } from '@utils/path.util';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

export default function StudentProfile() {
    const { renderOutlet, setBasePath } = usePath();

    useEffect(() => {
        setBasePath('/student/profile');
    }, []);

    if (renderOutlet) {
        return <Outlet />;
    } else {
        return (
            <div className="flex flex-col gap-[20px] h-full w-full">
                <PersonalDetail />
                <AssignedCourse />
            </div>
        );
    }
};