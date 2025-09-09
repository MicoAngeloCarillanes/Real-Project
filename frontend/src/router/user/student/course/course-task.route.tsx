import CourseTask from '@pages/user/student/course/course-task';
import { RouteObject } from 'react-router-dom';

export default function CourseTaskRoute(): RouteObject[] {
    return [
        {
            path: ':courseId/:taskId/task',
            element: <CourseTask />
        }
    ];
}