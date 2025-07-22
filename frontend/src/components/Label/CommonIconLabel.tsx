import { ReactElement, cloneElement } from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

interface CommonIconLabelProps {
    icon: ReactElement<SvgIconProps, typeof SvgIcon>;
    label: string;
}

export default function CommonIconLabel({
    icon,
    label
}: CommonIconLabelProps) {
    const sizedIcon = cloneElement(icon, {
        sx: { width: 20, height: 20 }
    });

    return (
        <div className="flex items-center gap-[10px] text-white text-sm">
            <span className="flex items-center justify-center">
                {sizedIcon}
            </span>
            <span>{label}</span>
        </div>
    );
}