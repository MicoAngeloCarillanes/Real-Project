import logo from '@assets/images/au-logo.png';

interface BrandCardProps {
    small?: boolean;
}

export default function BrandCard({ small = false }: BrandCardProps) {
    return (
        <>
            <div className="flex gap-1 items-center justify-center text-white">
                <img
                    src={logo}
                    height={180}
                    width={180}
                    className={`${small ? 'h-[80px] w-[80px]' : 'h-[140px] w-[140px]'}`}
                />
                <div className="w-full">
                    <span
                        className={`font-[800] leading-[100%] ${small ? 'text-[20px]' : 'text-[3em]'} w-full`}
                    >
                        Arellano University
                    </span>
                    <p
                        className={`font-extralight ${small ? 'text-[12px]' : 'text-[16px]'}`}
                    >
                        Jose Abad Santos College
                    </p>
                </div>
            </div>
        </>
    );
}