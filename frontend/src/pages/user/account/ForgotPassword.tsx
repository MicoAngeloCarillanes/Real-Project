import AuthenticationButton from '@components/buttons/AuthenticationButton';
import Input from '@components/input/Input';

export default function ForgotPassword() {

    return (
        <>
            <div className="flex flex-col items-center">
                <div className="w-full pb-5">
                    <Input 
                        type={'text'}
                        placeHolder={'Enter Username or Email'}
                    />
                </div>
                <div className="w-full flex flex-col items-center">
                    <AuthenticationButton label={'Search'}/>
                </div>
            </div>
        </>        
    );
}