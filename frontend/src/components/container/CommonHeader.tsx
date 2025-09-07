import IconSelect, { IconSelectProps } from '@components/select/IconSelect';
import React from 'react';

interface CommonHeaderProps {
    title?: string;
    subTitle?: string;
    icons?: Omit<IconSelectProps, 'selectOptions' | 'isHeader'>[];
}

export default function CommonHeader({
    title,
    subTitle,
    icons
}: CommonHeaderProps) {
    return (
        <div>
            <div className="flex items-center justify-between">
                <div className="flex flex-col gap-[4px]">
                    <h1 className="font-[700] leading-[100%] text-[#0C60A1] text-[20px]">{title}</h1>
                    <span className="leading-[100%] text-[12px]">
                        {subTitle}
                    </span>
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