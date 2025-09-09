import CommonBadge from '@components/badge/CommonBadge';
import DetailCard from '@components/card/DetailCard';
import ShadowCard from '@components/card/ShadowCard';
import CommonMediaWithContent from '@components/label/CommonMediaWithContent';
import { useNavigate } from 'react-router-dom';

interface CourseListProps {
    // Checks whether course list is grid or list
    isGrid?: boolean;
}

interface courseMapProps {
    cardDescription: string;
    cardName: string;
    courseColor: string;
    pendingActCount: number;
}

export default function CourseList({
    isGrid
}: CourseListProps) {
    const navigate = useNavigate();
    const courseMap: courseMapProps[] = [
        {
            cardDescription: 'ITC - 129',
            cardName: 'Computer Organization',
            courseColor: '#000000',
            pendingActCount: 5
        },
        {
            cardDescription: 'ITC - 101',
            cardName: 'Introduction to Computing',
            courseColor: '#1E90FF',
            pendingActCount: 2
        },
        {
            cardDescription: 'ITC - 202',
            cardName: 'Data Structures and Algorithms',
            courseColor: '#228B22',
            pendingActCount: 7
        },
        {
            cardDescription: 'ITC - 305',
            cardName: 'Database Management Systems',
            courseColor: '#FF8C00',
            pendingActCount: 3
        },
        {
            cardDescription: 'ITC - 410',
            cardName: 'Software Engineering',
            courseColor: '#8A2BE2',
            pendingActCount: 2
        }
    ];

    function handleCourseClick(course: courseMapProps) {
        navigate(`${course.cardName}/overview`);
    }

    return (
        <div
            className={`
                p-[16px]
                ${isGrid ? 'grid gap-[20px] grid-cols-[repeat(auto-fit,minmax(200px,1fr))] grid-rows-[250px] w-full' : 'w-full flex flex-col gap-[12px]'}
            `}
        >
            {courseMap.map((course, key) => (
                <div
                    key={key}
                    onClick={() => handleCourseClick(course)}
                >
                    <ShadowCard white>
                        <div
                            className={`
                                cursor-pointer relative w-full
                                ${isGrid ? 'h-[250px]' : 'flex gap-[16px] w-full px-[16px] py-[8px]'}
                            `}
                        >
                            {/* <div
                                className={isGrid ? 'h-[160px] w-full rounded-t-[8px]' : 'h-[36px] w-[36px]'}
                                style={{ backgroundColor: course.courseColor }}
                            ></div>
                            <div className={isGrid ? 'p-[8px]' : 'flex-1'}>
                                <DetailCard
                                    cardDescription={course.cardDescription}
                                    cardName={course.cardName}
                                    isCourse
                                    isTransparent
                                    {...props}
                                />
                            </div> */}
                            <CommonMediaWithContent
                                boxColor={course.courseColor}
                                boxSize={isGrid ? 'MEDIUM' : 'SMALL'}
                                isVertical={isGrid}
                            >
                                <div className={isGrid ? 'p-[8px]' : 'flex-1'}>
                                    <DetailCard
                                        cardDescription={course.cardDescription}
                                        cardName={course.cardName}
                                        isCourse
                                        isTransparent
                                    />
                                </div>
                            </CommonMediaWithContent>
                            <CommonBadge
                                count={course.pendingActCount}
                                size="sm"
                            />
                        </div>
                    </ShadowCard>
                </div>
            ))}
        </div>
    );
}