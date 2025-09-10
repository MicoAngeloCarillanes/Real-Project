
import AssignedCourse from '@pages/user/student/profile/AssignedCourse';
import PersonalDetail from '@pages/user/student/profile/PersonalDetail';

export default function StudentProfile() {

    return (
        <>
            <div className="flex flex-col gap-[20px] h-full w-full">
                <PersonalDetail />
                <AssignedCourse />
            </div>
        </>
    );
};