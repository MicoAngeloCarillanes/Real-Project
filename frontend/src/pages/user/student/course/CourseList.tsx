import ShadowCard from '@components/card/ShadowCard';
import DetailCard, { DetailCardProps } from '@components/card/DetailCard';
import { useNavigate } from 'react-router-dom';

interface CourseListProps extends DetailCardProps {
    // 
    isGrid?: boolean;
}

export default function CourseList({ 
    isGrid,
    ...props
}: CourseListProps) {
    const navigate = useNavigate();
    const courseList = [
        {
            cardDescription: 'ITC - 129',
            cardName: 'Computer Organization',
            courseColor: '#000000',
            pendingActCount: '5',
            onCourseClick: handleCourseClick
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
            pendingActCount: '2'
        }
    ];

    function handleCourseClick(courseId:string) {
        navigate(`${courseId}/overview`);
    }

    return (
        <div 
            className={`
                m-[16px] 
                ${isGrid ? 'grid gap-[20px] grid-cols-[repeat(auto-fit,minmax(200px,1fr))] grid-rows-[250px] w-full' : 'w-full flex flex-col gap-[12px]'}
            `}
        >
            {courseList.map((course, key) => (
                <div
                    key={key}
                    onClick={() => course.onCourseClick?.(course.cardDescription)}
                >
                    <ShadowCard white>
                        <div 
                            className={`
                                cursor-pointer relative w-full
                                ${isGrid ? 'h-[250px]' : 'flex gap-[16px] w-full px-[16px] py-[8px]'}
                            `}
                        >
                            <div
                                className={isGrid ? 'h-[160px] w-full rounded-t-[8px]' : 'h-[36px] w-[36px]'}
                                style={{ backgroundColor: course.courseColor }}
                            ></div>
                            <div className={isGrid ? 'p-[8px]' : 'flex-1'}>
                                <DetailCard 
                                    cardDescription={course.cardDescription}
                                    cardName={course.cardName}
                                    isCourse
                                    {...props}
                                />
                            </div>
                            <span className="absolute bg-[#BF0A12] flex font-[600] h-[16px] items-center justify-center right-[-5px] rounded-full text-[#FFFFFF] text-[10px] top-[-5px] w-[16px]">
                                {course.pendingActCount}
                            </span>
                        </div>
                    </ShadowCard>
                </div>
            ))}
        </div>
    );
}