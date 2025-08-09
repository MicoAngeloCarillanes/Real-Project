import { InputHTMLAttributes, useEffect, useRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    type: 'text' | 'password' | 'number';
}

export default function Input({
    type,
    ...props
}: InputProps) {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (type === 'number' && inputRef.current) {
            const el = inputRef.current;
            el.addEventListener('keydown', (e) => {
                if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
                    e.preventDefault();
                }
            });
        }
    }, [type]);

    return (
        <>
            <input
                ref={inputRef}
                className={`border-[0.5px] border-black outline-none p-3 rounded-[4px] shadow-sm text-[16px] text-[#000000] w-full ${type === 'password' ? 'mt-4' : ''}`}
                style={{
                    boxShadow: '0 4px 4px rgba(0, 0, 0, 0.25)',
                    // Remove number input spinner
                    appearance: type === 'number' ? 'textfield' : undefined
                }}
                type={type}
                {...props}
            />
        </>
    );
}