import CourseOverview from '@pages/user/student/course/CourseOverview';
import type { RouteObject } from 'react-router-dom';

export default function CourseOverviewRoute(): RouteObject[] {
    return [
        {
            path: ':courseId/overview',
            element: <CourseOverview />
        }
    ];
}