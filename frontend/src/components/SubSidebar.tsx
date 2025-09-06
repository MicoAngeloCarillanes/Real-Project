import arrowDropdownIcon from '@assets/icons/arrow-drop-down-icon.svg';
import logo from '@assets/images/au-logo.svg';
import ShadowCard from '@components/card/ShadowCard';
import DetailCard from '@components/card/DetailCard';
import CommonDatepicker from '@components/datepicker/CommonDatepicker';
import CommonMediaWithContent from '@components/Label/CommonMediaWithContent';
import IconSelect from '@components/select/IconSelect';
import { useEffect, useRef, useState } from 'react';

export default function SubSidebar() {
    const timelineSortingOptions = ['All', 'Overdue', 'Upcoming', 'No due date'];
    const listRef = useRef<HTMLDivElement>(null);
    const [isOverflowing, setIsOverflowing] = useState(false);

    useEffect(() => {
        const checkOverflow = () => {
            if (listRef.current) {
                const { scrollHeight, clientHeight } = listRef.current;
                setIsOverflowing(scrollHeight > clientHeight);
            }
        };

        // Run initially
        checkOverflow();

        // Observe resizes
        const observer = new ResizeObserver(checkOverflow);
        if (listRef.current) {
            observer.observe(listRef.current);
        }

        // Cleanup
        return () => observer.disconnect();
    }, []);

    return(
        <div className="bg-transparent bottom-[25px] fixed flex flex-col gap-[16px] p-[16px] right-[9px] rounded-[8px] top-[25px] w-[250px]">
            <CommonMediaWithContent
                imageUrl={logo} 
                isVertical
                size="LARGE"
            >
                <span className="leading-[100%] text-[16px] text-[black]">
                    Julius Robert T. Tolentino
                </span>
            </CommonMediaWithContent>
            <ShadowCard>
                <CommonDatepicker />                
            </ShadowCard>
            <ShadowCard>
                <div className="flex flex-col gap-[16px] max-h-[calc(100vh-410px)] pb-[8px] pt-[16px] px-[8px] relative w-full">
                    <div className="flex font-[600] h-[16px] items-center justify-center relative text-[#052554]">
                        <span className="-translate-x-1/2 absolute leading-[100%] left-1/2 text-[12px] top-[0px]">
                            Timeline
                        </span>
                        <div className="absolute right-[8px] top-[5px]">
                            <IconSelect
                                height={4}
                                imageUrl={arrowDropdownIcon}
                                selectOptions={timelineSortingOptions}
                                width={8}
                            />
                        </div>
                    </div>

                    {/* Timeline list */}
                    <div
                        ref={listRef}
                        className="flex flex-col gap-[8px] overflow-y-auto pr-[4px] scrollbar-thin"
                    >
                        {Array.from({ length: 10 })
                            .map((_, index) => (
                                <DetailCard
                                    dueDate="Due Nov. 29, 11:59 PM"
                                    isOverflowing={isOverflowing}
                                    key={index}
                                    cardDescription="ITC - 129 LEC"
                                    cardName="Learning Task No. 4 Jose Rizal the Movie"
                                />
                            ))}
                    </div>

                    {/* Show only if overflowing */}
                    {isOverflowing && (
                        <div className="text-center">
                            <span className="cursor-pointer hover:font-[600] text-[#052554] text-[14px]">
                                View Timeline Page
                            </span>
                        </div>
                    )}
                </div>
            </ShadowCard>
        </div>
    );
}