import auLogo from '@assets/images/au-logo.svg';
import CommonMediaWithContent from '@components/Label/CommonMediaWithContent';
import SearchIcon from '@mui/icons-material/SearchOutlined';
import React, { useRef, useState } from 'react';

export default function SearchContact() {
    // Ref variables
    const containerRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    // State variables
    const [isSearching, setIsSearching] = useState(false);
    // Custom variables
    const items = Array.from({ length: 15 }, (_, i) => ({
        id: i + 1,
        logo: auLogo,
        label: `Item ${i + 1}`
    }));
    
    /**
     * Cancels the search mode when the Escape key is pressed.
     *
     * @param e - The keyboard event triggered when a key is pressed inside the search input.
     */
    function handleCancelSearch(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key === 'Escape') {
            setIsSearching(false);
        }
    }

    /**
     * Handles blur events on the search container.
     * If the newly focused element is outside the container, the search state is deactivated.
     *
     * @param e - The blur event from the search container.
     */
    function handleSearchBlur(e: React.FocusEvent<HTMLDivElement>) {
        if (!containerRef.current?.contains(e.relatedTarget as Node)) {
            setIsSearching(false);
        }
    }
    
    /**
     * Activates the search state and focuses the input field when search icon is clicked.
     */
    function handleSearchClick() {
        setIsSearching(true);
        setTimeout(() => {
            inputRef.current?.focus();
        }, 0);
    }

    return (
        <>
            <div
                className={`
                    flex h-[28px] items-center justify-between pr-[8px] relative text-white 
                    ${isSearching ? 'bg-white pl-4 pr-2 rounded-full' : ''}
                `}
                ref={containerRef}
                tabIndex={-1}
                onBlur={handleSearchBlur}
            >
                <label 
                    className={`
                        font-bold text-[14px] 
                        ${isSearching ? 'hidden' : ''}
                    `}
                >
                    Contacts
                </label>
                <input
                    className={`
                        outline-none text-[12px] text-black w-full
                        ${isSearching ? '' : 'hidden'} 
                    `}
                    placeholder="Enter contact name"
                    ref={inputRef}
                    type="text"
                    onKeyDown={handleCancelSearch}
                />
                <span
                    className={`${isSearching ? 'text-[#052554]' : ''} cursor-pointer`}
                    onClick={handleSearchClick}
                >
                    <SearchIcon 
                        sx={{
                            width: 20, height: 20
                        }}
                    />
                </span>
            </div>
            <div className="[scrollbar-color:#FFFFFF_transparent] [scrollbar-width:thin] border-b border-t border-white overflow-y-auto p-[4px] pr-[10px] text-wrap">
                {items.map((item) => (
                    <div key={item.id} className="cursor-pointer hover:bg-[#ffffff4D]">
                        <CommonMediaWithContent
                            imageUrl={item.logo}
                            size="MEDIUM"
                        >
                            <span className="font-[400] overflow-hidden text-[12px] text-nowrap">
                                Julius Robert Tolentino{item.label}
                            </span>
                        </CommonMediaWithContent>
                    </div>
                ))}
            </div>
        </>
    );
}