import StudentProfile from '@pages/user/student/profile';
import { RouteObject } from 'react-router-dom';
import gradeRoute from './grade-report.route';

export default function studentProfileRoute(): RouteObject[] {
    return [
        {
            path: 'profile/',
            element: <StudentProfile />,
            children: [
                ...gradeRoute()
            ]
        }
    ];
}