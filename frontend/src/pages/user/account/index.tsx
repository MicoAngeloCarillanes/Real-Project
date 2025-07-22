import BrandCard from '@components/card/BrandCard';
import background from '@assets/images/au-background.png';
import CommonIconLabel from '@components/Label/CommonIconLabel';
import halfBackground from '@assets/images/au-half-background.png';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Outlet } from 'react-router-dom';

export default function Account() {

    return (
        <>
            <div 
                className="bg-pink-200 flex flex-col gap-[5rem] h-screen p-10 justify-center items-center"
                style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'top' }}
            >
                
                <div className="text-[16px] bg-[#0C60A1] flex border border-black h-[50em] rounded-[1.25rem] w-[87.5em] text-white">
                    <div className="flex-1 pt-24 px-[6.75rem] relative max-w-[43.75em]">
                        <div className="mb-[8.5rem]">
                            <BrandCard />
                        </div>
                        <Outlet />
                        <span className="absolute bottom-[2.25rem] left-[2.25rem]">
                            <CommonIconLabel icon={<LockOutlinedIcon />} label={'Data Privacy'}/>
                        </span>
                    </div>
                    <div 
                        className="flex-1 bg-[url] max-w-[43.75em] rounded-r-[1.25rem]"
                        style={{ backgroundImage: `url(${halfBackground})`, backgroundSize: 'cover', backgroundPosition: 'bottom center' }}
                    >
                    </div>
                </div>
            </div>
        </>
    );
};