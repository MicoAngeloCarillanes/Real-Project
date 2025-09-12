import MainDiv from "@components/container/MainDiv";
import CommonHeader from '@components/container/CommonHeader';
import ShadowCard from '@components/card/ShadowCard';

export default function StudentChat() {

    return (
        <MainDiv>
            <CommonHeader 
                title="Chats"
            /> 
            <ShadowCard 
                isCentered
                isLarge
            >
                <div className="flex flex-col h-[600px] w-full max-w-md bg-gray-100 rounded-lg shadow-xl overflow-hidden">
                    
                    <div className="flex items-center gap-3 p-4 border-b border-gray-200 bg-white">
                        <div className="size-10 rounded-full overflow-hidden">
                        <img src="avatar.jpg" alt="User Avatar" className="w-full h-full object-cover"/>
                        </div>
                        <div>
                        <h3 className="font-semibold text-lg">Chat Bot</h3>
                        <p className="text-sm text-gray-500">Online</p>
                        </div>
                    </div>

                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
                        <div className="flex items-start gap-2.5">
                        <img className="size-8 rounded-full" src="avatar.jpg" alt="Bot Avatar"/>
                        <div className="flex flex-col max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-200 rounded-e-xl rounded-es-xl">
                            <p className="text-sm font-normal text-gray-900">Hello, I am a bot. How can I help you today?</p>
                        </div>
                        </div>

                        <div className="flex items-end justify-end gap-2.5">
                        <div className="flex flex-col max-w-[320px] leading-1.5 p-4 border-gray-200 bg-blue-500 rounded-s-xl rounded-es-xl text-white">
                            <p className="text-sm font-normal">I'm looking for a basic chat layout.</p>
                        </div>
                        <img className="size-8 rounded-full" src="avatar.jpg" alt="User Avatar"/>
                        </div>
                    </div>
                    
                    <div className="p-4 border-t border-gray-200 bg-white">
                        <div className="flex gap-2">
                        <input 
                            type="text" 
                            placeholder="Type a message..." 
                            className="flex-1 p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button className="bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 00.149 1.488 1 1 0 00.748.156L8 18.257l2.844-3.555A1 1 0 0112 14v1a1 1 0 001.488.156l7-14a1 1 0 00-.149-1.488 1 1 0 00-.748-.156L10.894 2.553z"></path>
                            </svg>
                        </button>
                        </div>
                    </div>

                    </div>
            </ShadowCard>
        </MainDiv>
    );
};
