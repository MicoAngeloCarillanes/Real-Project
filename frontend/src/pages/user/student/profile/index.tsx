import AssignedCourse from '@pages/user/student/profile/AssignedCourse';
import PersonalDetail from '@pages/user/student/profile/PersonalDetail';
import { useLocation } from 'react-router-dom';

export default function StudentProfile() {
    const location = useLocation();
    const profilePath = '/student/profile';
    const isBaseProfile = location.pathname === profilePath;
    const isProfilePath = location.pathname.startsWith(profilePath);

    return (
        <>

            <div className="flex flex-col gap-[20px] h-full w-full">
                <PersonalDetail />
                <AssignedCourse />
            </div>
        </>
    );
};