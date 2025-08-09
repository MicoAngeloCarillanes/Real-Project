import logo from '@assets/images/au-logo.png';
import TabButtonGroup from '@components/buttons/TabButtonGroup';
import BrandCard from '@components/card/BrandCard';
import SearchInput from '@components/input/SearchInput';
import CommonIconLabel from '@components/Label/CommonIconLabel';
import CommonImageLabel from '@components/Label/CommonImageLabel';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { useEffect, useRef, useState } from 'react';

export default function Sidebar() {
    const [isScrolling, setIsScrolling] = useState(false);
    const scrollRef = useRef<HTMLDivElement | null>(null);
    const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const tabOptions = ['Dashboard', 'Course', 'Chats', 'Settings'];

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;

        const handleScroll = () => {
            setIsScrolling(true);

            if (scrollTimeoutRef.current)
                clearTimeout(scrollTimeoutRef.current);
            scrollTimeoutRef.current = setTimeout(() => {
                setIsScrolling(false);
            }, 250);
        };

        el.addEventListener('scroll', handleScroll);
        return () => {
            el.removeEventListener('scroll', handleScroll);
            if (scrollTimeoutRef.current)
                clearTimeout(scrollTimeoutRef.current);
        };
    }, []);

    return (
        <aside
            ref={scrollRef}
            className={`${isScrolling ? 'scrollbar-arrows' : 'no-scrollbar-arrows'} bg-[#0C60A1] bottom-0 fixed flex flex-col gap-6 left-0 lg:p-[3.125rem] lg:w-[350px] overflow-y-auto p-4 sm:p-6 sm:w-[250px] text-white top-0 w-full`}
        >
            <BrandCard small />
            <TabButtonGroup tabOptions={tabOptions} />

            <div className="flex-1">
                <SearchInput />
                <div className="accent-black border-b border-t-2 border-tmin-h-[200px]border-b border-white crollbar-thumb-white max-h-[312px] mt-4 overflow-y-auto p-2 scrollbar-thin text-wrap">
                    <CommonImageLabel
                        imageUrl={logo}
                        name={
                            'Mic3213212131231232121312312321o Angelo Carillanes'
                        }
                    />
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <CommonIconLabel
                    icon={<LockOutlinedIcon />}
                    label={'Data Privacy'}
                />
                <CommonIconLabel
                    icon={<ContactSupportOutlinedIcon />}
                    label={'Technical Support'}
                />
                <CommonIconLabel
                    icon={<LogoutOutlinedIcon />}
                    label={'Logout'}
                />
            </div>
        </aside>
    );
}