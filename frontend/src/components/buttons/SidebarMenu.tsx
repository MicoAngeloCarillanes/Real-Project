import { useEffect, useState } from 'react';

interface SidebarMenuProps {
    // User level to determine appropriate tab options per user role
    userLevel?: 'student' | 'faculty' | 'admin';
}

/**
 * Sidebar menu component that displays navigation options based on the user's role.
 *  
 * @example
 * function MainSidebar() {
 *   return (
 *      <SidebarMenu userLevel="faculty" />
 *   );
 * }
 */
export default function SidebarMenu({
    userLevel
}: SidebarMenuProps) {
    // State variables
    const [activeTab, setActiveTab] = useState('');
    // Custom variables
    const tabMap = {
        'student': ['Dashboard', 'Course', 'Chats', 'Settings'],
        'faculty': ['Dashboard', 'Course', 'Chats', 'Settings'],
        'admin': ['Admin', 'Course', 'Chats', 'Settings']
    };
    const tabOptions = userLevel ? tabMap[userLevel] : [];

    useEffect(() => {
        setActiveTab(tabOptions[0]);
    }, []);

    /**
     * Changes the active tab and navigates user to designated screen.
     *
     * @param {string} tab - The identifier of the clicked tab.
     */
    function handleSelectedTab(tab: string) {
        setActiveTab(tab);
    }
    
    return (
        <ul className="flex flex-col gap-[4px]">
            {tabOptions.map((tab) => (
                <li 
                    className={`${activeTab === tab ? '!bg-[#D4D9EA]' : ''} bg-[#F6F4FB] cursor-pointer hover:bg-[#c7c9df] overflow-hidden px-[20px] py-[12px] relative rounded-[8px] shadow-[0_4px_4px_rgba(0,0,0,0.25)]`}
                    key={tab}
                    onClick={() => handleSelectedTab(tab)}
                >
                    <span className="font-[700] text-[#052554] text-[16px]">
                        {tab}
                    </span>
                    {activeTab === tab && (
                        <div className="[clip-path:ellipse(60%_80%_at_70%_100%)] absolute bg-[#c7c9df] bottom-[-10px] h-[100px] origin-bottom-right right-[-5px] rounded-[99999px] scale-[0.5] w-[120px]"></div>
                    )}
                </li>
            ))}
        </ul> 
    );
}