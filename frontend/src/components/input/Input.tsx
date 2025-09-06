import { InputHTMLAttributes, useEffect, useRef } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
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
                className="border-[0.5px] border-black outline-none p-3 rounded-[4px] shadow-[0_4px_4px_rgba(0,0,0,0.25)] text-[#000000] text-[16px] w-full"
                ref={inputRef}
                type={type}
                {...props}
            />
        </>
    );
}