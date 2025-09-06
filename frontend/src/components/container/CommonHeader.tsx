import IconSelect from '@components/select/IconSelect';
import React from 'react';

interface Icon {
    iconUrl: string;
}

interface CommonHeaderProps {
    title?: string;
    subTitle?: string;
    icons?: Icon[];
}

export default function CommonHeader({
    title,
    subTitle,
    icons
}: CommonHeaderProps) {
    return (
        <div>
            <div className="flex justify-between items-center">
                <div className="flex flex-col gap-[4px]">
                    <h1 className="text-[#0C60A1] text-[20px] font-[700] leading-[100%]">{title}</h1>
                    <span className="text-[12px] leading-[100%]">{subTitle}</span>
                </div>
                <div className="flex gap-[16px]">
                    {icons?.map((icon, key) => (
                        <React.Fragment key={key}>
                            <IconSelect 
                                isHeader
                                height={10}
                                width={10}
                                imageUrl={icon.iconUrl}
                                onIconClick={() => console.log('clicked')}
                            />
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
}