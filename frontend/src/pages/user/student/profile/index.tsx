import logo from '@assets/images/au-logo.svg';
import CommonMediaWithContent from '@components/label/CommonMediaWithContent';

export default function StudentProfile() {

    return (
        <>
            <CommonMediaWithContent
                imageUrl={logo}
                size="LARGE"
            >
                <div className="flex flex-col gap-[8px]">
                    <h1 className="font-[700] leading-[100%] text-[#0C60A1] text-[20px]">Julius Robert T. Tolentino</h1>
                </div>
            </CommonMediaWithContent>
        </>
    );
};