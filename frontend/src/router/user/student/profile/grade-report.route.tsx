import DetailGrade from '@pages/user/student/profile/grade/DetailGrade';
import FacultyEvaluation from '@pages/user/student/profile/grade/FacultyEvaluation';
import OverallGrade from '@pages/user/student/profile/grade/OverallGrade';
import { RouteObject } from 'react-router-dom';

export default function gradeRoute(): RouteObject[] {
    return [
        {
            element: <OverallGrade />,
            path: 'grade-report',
            children: [
                {
                    element: <DetailGrade />,
                    path: ':courseCode'
                },
                {
                    element: <FacultyEvaluation />,
                    path: 'evaluate-faculty/:courseCode'
                }
            ]
        }
    ];
}