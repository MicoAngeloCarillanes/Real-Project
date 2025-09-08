import notifBellIcon from '@assets/icons/notification-bell-icon.svg';
import settingsIcon from '@assets/icons/settings-icon.svg';
import gridMenuIcon from '@assets/icons/grid-menu-icon.svg';
import listMenuIcon from '@assets/icons/list-menu-icon.svg';
import CourseList from '@pages/user/student/course/CourseList';
import ShadowCard from '@components/card/ShadowCard';
import CommonHeader from '@components/container/CommonHeader';
import MainDiv from '@components/container/MainDiv';
import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

export default function StudentCourse() {
    const location = useLocation();
    const coursePath = '/student/course/';
    const isCourseRoot = location.pathname === coursePath;
    const isCoursePath = location.pathname.startsWith(coursePath);
    const [isGrid, setIsGrid] = useState(false);
    const iconMap = [
        {
            imageUrl: notifBellIcon,
            pendingActCount: '5'
        },
        {
            imageUrl: settingsIcon
        },
        {
            height: 13,
            imageUrl: isGrid ? gridMenuIcon : listMenuIcon,
            width: 13,
            onIconClick: handleToggleDisplay
        }
    ];

    function handleToggleDisplay() {
        setIsGrid(!isGrid);
    }

    return (
        <>
            {(!isCourseRoot && isCoursePath) ? (
                <Outlet />
            ) : (
                <MainDiv>
                    <CommonHeader
                        title="Courses"
                        subTitle="Course List"
                        icons={iconMap}
                    />
                    <ShadowCard isLarge>
                        <CourseList isGrid={isGrid} />
                    </ShadowCard>
                </MainDiv>
            )}
        </>
    );
};