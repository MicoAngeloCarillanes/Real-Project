interface CommonBadgeProps {
    // Badge value
    count?: number | string;
    // Badge size
    size?: 'xm' | 'sm' | 'm';
}

export default function CommonBadge({
    count,
    size
}: CommonBadgeProps) {
    // Custom variables
    const badgeSizeMap = {
        'xm': {
            fontSize: '8px',
            fontWeight: 600,
            height: '12px',
            right: '-4px',
            top: '-4px',
            width: '12px'
        },
        'sm': {
            fontSize: '10px',
            fontWeight: 600,
            height: '16px',
            right: '-5px',
            top: '-5px',
            width: '16px'
        },
        'm': {
            fontSize: '10px',
            fontWeight: 600,
            height: '20px',
            right: '-10px',
            top: '-10px',
            width: '20px'
        }
    };
    const badgeSize = size ? badgeSizeMap[size] : {};

    return(
        <span
            className="absolute bg-[#BF0A12] flex items-center justify-center leading-[100%] rounded-full text-[#FFFFFF]"
            style={badgeSize}
        >
            {count ? count : ''}
        </span>
    );
}