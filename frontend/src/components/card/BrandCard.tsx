import logo from '@assets/images/au-logo.png';

interface BrandCardProps {
    small?: boolean;
}

export default function BrandCard({
    small = false
}: BrandCardProps) {

    return (
        <>
            <div className="flex gap-1 items-center justify-center text-white">
                <img 
                    src={logo}
                    height={180}
                    width={180}
                    className={`${small ? 'h-[6.25rem] w-[6.25rem]' : 'h-[11.25rem] w-[11.25rem]'}`}
                />
                <div className={`${small ? 'w-[9.5rem]' : 'w-[17.25rem]'}`}>
                    <span className={`break-words font-extrabold ${small ? 'leading-5 text-[1.75em]' : 'leading-10 text-[3em]'}`}>
                        Arellano University
                    </span>
                    <p className={`font-extralight ${small ? 'text-[0.75em]' : 'text-[1em]'}`}>
                        Jose Abad Santos College
                    </p>
                </div>
            </div>
        </>
    );
}