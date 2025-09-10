import { classMerge } from '@utils/css.util';

export interface CommonButtonProps {
    // Button label
    buttonLabel?: string;
    // Button style
    buttonStyle?: 'white' | 'blue';
    // Checks whether button is shadowed or not
    isShadowed?: boolean;
    // Button size
    size?: 'sm' | 'm' | 'default';
}

export default function CommonButton({
    buttonLabel,
    buttonStyle,
    isShadowed,
    size = 'default'
}: CommonButtonProps) {
    const buttonSizeMap = {
        sm: {
            fontSize: '10px',
            padding: '5px 10px'
        },
        m: {
            fontSize: '12px',
            padding: '8px 14px'
        },
        default: {
            fontSize: '14px',
            padding: '10px 20px'
        }
    };
    const buttonSize = buttonSizeMap[size];

    return (
        <button
            className={
                classMerge(
                    'font-[400] leading-[100%] rounded-full',
                    buttonStyle === 'white'
                        ? 'bg-[#FFFFFF] text-[#052554]'
                        : 'bg-[#0C60A1] text-[#FFFFFF]',
                    isShadowed
                        ? 'shadow-[0_4px_4px_rgba(0,0,0,0.35)'
                        : ''
                )
            }
            style={buttonSize}
        >
            {buttonLabel}
        </button>
    );
}