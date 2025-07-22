import AuthenticationButton from '@components/buttons/AuthenticationButton';
import Input from '@components/input/Input';

export default function Login() {
    return (
        <>
            <div className="flex flex-col items-center">
                <div className="w-full pb-5">
                    <Input 
                        type={'text'}
                        placeHolder={'Username'}
                    />
                    <Input 
                        type={'password'}
                        placeHolder={'Password'}
                    />
                    <div className="gap-3 items-center flex pt-3">
                        <input type="checkbox"
                            className="appearance-none bg-white checked:after:content-['✓'] flex h-4 items-center justify-center outline-none rounded text-black w-4"
                        />
                        <span className="text-white">Remember username</span>
                    </div>
                </div>
                <div className="w-full flex flex-col items-center">
                    <AuthenticationButton label={'Login'}/>
                    <p className="text-white pt-3">Forgot username or password?</p>
                </div>
            </div>
        </>        
    );
}