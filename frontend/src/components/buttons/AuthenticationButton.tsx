interface AuthenticationButtonProps {
    // Label of the button
    label: string;
}

/**
 * Authentication button component used for actions such as login or password recovery.
 *
 * @example
 * function Login() {
 *   return (
 *      <AuthenticationButton label="Login" />
 *   );
 * }
 * 
 */
export default function AuthenticationButton({
    label
}: AuthenticationButtonProps) {

    return (
        <button className="bg-[#000000] hover:opacity-[0.8] min-w-[312px] p-[12px] rounded-[8px] text-[#FFFFFF]">
            {label}
        </button>
    );
}