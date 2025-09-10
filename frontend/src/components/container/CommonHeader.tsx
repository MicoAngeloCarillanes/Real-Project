import IconSelect, { IconSelectProps } from '@components/select/IconSelect';
import { classMerge } from '@utils/css.util';
import React from 'react';

interface CommonHeaderProps {
    // Header icons
    icons?: Omit<IconSelectProps, 'selectOptions' | 'isHeader'>[];
    // Checks whether the header is of course
    isCourseHeader?: boolean;
    // Header sub title
    subTitle?: string;
    // Header title
    title?: string;
}

export default function CommonHeader({
    icons,
    isCourseHeader,
    subTitle,
    title
}: CommonHeaderProps) {
    return (
        <div>
            <div className="flex items-center justify-between">
                <div className="flex flex-col gap-[4px]">
                    <h1
                        className={
                            classMerge(
                                'font-[700] leading-[100%] text-[20px]',
                                isCourseHeader
                                    ? 'text-[#080612]'
                                    : 'text-[#0C60A1]'
                            )
                        }
                    >
                        {title}
                    </h1>
                    <h2
                        className={
                            classMerge(
                                'leading-[100%] text-[12px] #080612',
                                isCourseHeader ? 'font-[300]' : 'font-[400]'
                            )
                        }
                    >
                        {subTitle}
                    </h2>
                </div>
                <div className="flex gap-[8px]">
                    {icons?.map((icon, key) => (
                        <React.Fragment key={key}>
                            <IconSelect
                                height={icon.height || 11}
                                imageUrl={icon.imageUrl}
                                isHeader
                                pendingActCount={icon.pendingActCount}
                                width={icon.width || 11}
                                onIconClick={icon.onIconClick ? icon.onIconClick : undefined}
                            />
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
}