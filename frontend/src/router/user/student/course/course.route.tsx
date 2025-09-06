import StudentCourse from '@pages/user/student/course';
import type { RouteObject } from 'react-router-dom';

export default function StudentCourseRoute(): RouteObject[] {
    return [
        {
            path: 'course',
            element: <StudentCourse />
        }
    ];
}