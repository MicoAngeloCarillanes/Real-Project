import lockIcon from '@assets/icons/lock-icon.svg';
import supportIcon from '@assets/icons/support-icon.svg';
import CourseCard from '@components/card/CourseCard';
import ShadowCard from '@components/card/ShadowCard';
import CommonHeader from '@components/container/CommonHeader';
import MainDiv from '@components/container/MainDiv';
import React, { useState } from 'react';

export default function StudentCourse() {
    const [isGrid, setIsGrid] = useState(true);
    const iconMap = [
        {
            iconUrl: lockIcon
        },
        {
            iconUrl: supportIcon
        }
    ];
    const courseList = [
        {
            cardDescription: 'ITC - 129',
            cardName: 'Computer Organization',
            courseColor: '#000000',
            pendingActCount: '5'
        },
        {
            cardDescription: 'ITC - 101',
            cardName: 'Introduction to Computing',
            courseColor: '#1E90FF',
            pendingActCount: '2'
        },
        {
            cardDescription: 'ITC - 202',
            cardName: 'Data Structures and Algorithms',
            courseColor: '#228B22',
            pendingActCount: '7'
        },
        {
            cardDescription: 'ITC - 305',
            cardName: 'Database Management Systems',
            courseColor: '#FF8C00',
            pendingActCount: '3'
        },
        {
            cardDescription: 'ITC - 410',
            cardName: 'Software Engineering',
            courseColor: '#8A2BE2',
            pendingActCount: '4'
        }
    ];
    
    return (
        <MainDiv>
            <CommonHeader
                title="Courses"
                subTitle="Course List"
                icons={iconMap}         
            />
            <ShadowCard isLarge>
                <div 
                    className={`
                        m-[20px] 
                        ${isGrid ? 'grid gap-[20px] grid-cols-[repeat(auto-fit,minmax(200px,1fr))] grid-rows-[250px] w-full' : 'w-full flex flex-col gap-[12px]'}
                    `}
                >
                    {courseList.map((course, key) => (
                        <React.Fragment
                            key={key}
                        >
                            <CourseCard 
                                cardDescription={course.cardDescription}
                                cardName={course.cardName}
                                courseColor={course.courseColor}
                                pendingActCount={course.pendingActCount}
                                isGrid={isGrid}
                            />
                        </React.Fragment>
                    ))}
                </div>
            </ShadowCard>
        </MainDiv>
    );
};