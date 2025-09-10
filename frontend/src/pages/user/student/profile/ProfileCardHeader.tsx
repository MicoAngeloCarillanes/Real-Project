import CommonButton, { CommonButtonProps } from '@components/buttons/CommonButton';

interface ProfileCardHeaderProps extends CommonButtonProps {
    // Profile card label
    cardLabel: string;
}

export default function ProfileCardHeader({
    cardLabel,
    ...props
}: ProfileCardHeaderProps) {
    return (
        <div className="flex items-center justify-between w-full">
            <h2 className="font-[600] leading-[100%] text-[#052554] text-[14px]">
                {cardLabel}
            </h2>
            <CommonButton
                {...props}
            />
        </div>
    );
}