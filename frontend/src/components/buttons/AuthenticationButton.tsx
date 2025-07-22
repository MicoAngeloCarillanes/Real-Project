interface AuthenticationButtonProps {
    label: string;
}

export default function AuthenticationButton({
    label
}: AuthenticationButtonProps) {

    return (
        <>
            <button 
                className="bg-black p-3 min-w-[19.5rem] rounded-lg text-white"
            >
                {label}
            </button>
        </>
    );
}