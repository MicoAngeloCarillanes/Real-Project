import StudentCourse from '@pages/user/student/course';
import type { RouteObject } from 'react-router-dom';
import CourseOverviewRoute from '@router/user/student/course/course-overview.route';
import CourseTaskRoute from '@router/user/student/course/course-task.route';

export default function StudentCourseRoute(): RouteObject[] {
    return [
        {
            path: 'course/',
            element: <StudentCourse />,
            children: [
                ...CourseOverviewRoute(),
                ...CourseTaskRoute()
            ]
        }
    ];
}