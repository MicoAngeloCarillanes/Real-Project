import { useState } from 'react';
import TabButton from './TabButton';

interface TabButtonGroupProps {
    tabOptions: string[];
    onClick?: () => void;
}

export default function TabButtonGroup({
    tabOptions,
    onClick
}: TabButtonGroupProps) {
    const [activeTab, setActiveTab] = useState<string>(tabOptions[0]);

    function handleToggle(tab: string) {
        onClick?.();
        setActiveTab(tab);
    }
    
    return (
        <>
            <ul>
                {tabOptions.map((tab) => (
                    <TabButton
                        key={tab}
                        label={tab}
                        isActive={activeTab === tab}
                        onClick={() => handleToggle(tab)}
                    />
                ))}
            </ul> 
        </>
    );
}