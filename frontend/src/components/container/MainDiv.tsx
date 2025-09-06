import { ReactNode } from 'react';

interface MainDivProps {
    children: ReactNode;
}

export default function MainDiv({
    children
}: MainDivProps) {

    return (
        <div className="flex flex-col gap-[12px]">
            {children}
        </div>
    );
}