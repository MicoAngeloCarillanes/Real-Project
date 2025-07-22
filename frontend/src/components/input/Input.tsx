interface InputProps {
    type: 'text' | 'password';
    placeHolder: string;
}

export default function Input({
    type,
    placeHolder
}: InputProps) {

    return (
        <>
            <input 
                className={`border-[0.5px] border-black focus:bg-[#e5f7ff] outline-none p-3 rounded-[4px] shadow-sm text-[1em] w-full ${type === 'password' ? 'mt-4' : ''}`}
                placeholder={placeHolder}
                style={{ boxShadow: '0 4px 4px rgba(0, 0, 0, 0.25)' }}
                type={type} 
            >
            </input>
        </>
    );
}