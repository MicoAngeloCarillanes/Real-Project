import { useRef, useState } from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

export default function Input() {
    const containerRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const [isSearching, setIsSearching] = useState(false);

    function handleSearchClick() {
        setIsSearching(true);
        setTimeout(() => {
            inputRef.current?.focus();
        }, 0);
    }

    function handleBlur(e: React.FocusEvent<HTMLDivElement>) {
        if (!containerRef.current?.contains(e.relatedTarget as Node)) {
            setIsSearching(false);
        }
    }

    return (
        <div
            ref={containerRef}
            tabIndex={-1}
            onBlur={handleBlur}
            className={`
                flex gap-1 h-10 items-center justify-between py-3 relative
                text-white transition-all duration-150 ${isSearching ? 'bg-white pl-4 pr-2 rounded-full' : ''}
            `}
        >
            <span className={`font-bold text-[20px] ${isSearching ? 'hidden' : ''}`}>
                Contacts
            </span>

            <input
                ref={inputRef}
                placeholder="Enter contact name"
                className={`text-black outline-none w-full ${isSearching ? '' : 'hidden'}`}
                onKeyDown={(e) => {
                    if (e.key === 'Escape') setIsSearching(false);
                }}
            />

            <span
                className={`cursor-pointer ${isSearching ? 'text-[#052554]' : ''}`}
                onClick={handleSearchClick}
            >
                <SearchOutlinedIcon />
            </span>
        </div>
    );
}