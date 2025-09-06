import ShadowCard from '@components/card/ShadowCard';
import DetailCard, { DetailCardProps } from '@components/card/DetailCard';

interface CourseCardProps extends DetailCardProps {
    // 
    courseColor?: string;
    // 
    isGrid?: boolean;
    // 
    pendingActCount: string;
}

export default function CourseCard({ 
    courseColor,
    isGrid,
    pendingActCount,
    ...props
}: CourseCardProps) {
    const courseBackgroundColor = { backgroundColor: courseColor };

    return (
        <ShadowCard white>
            <div 
                className={`
                    cursor-pointer relative w-full
                    ${isGrid ? 'h-[250px]' : 'flex gap-[16px] w-full px-[16px] py-[8px]'}
                `}
            >
                <div
                    className={isGrid ? 'h-[160px] w-full rounded-t-[8px]' : 'h-[36px] w-[36px]'}
                    style={courseBackgroundColor}
                ></div>
                <div className="flex-1 p-[8px]">
                    <DetailCard 
                        isCourse
                        {...props}
                    />
                </div>
                <span className="text-[#FFFFFF] h-[16px] w-[16px] bg-[#BF0A12] flex items-center justify-center absolute top-[-5px] right-[-5px] text-[10px] rounded-full font-[600]">
                    {pendingActCount}
                </span>
            </div>
        </ShadowCard>
    );
}