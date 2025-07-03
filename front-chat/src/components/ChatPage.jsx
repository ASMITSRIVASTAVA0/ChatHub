import React from "react";
import { IoMdSend } from "react-icons/io";

const ChatPage=()=>{
    return (
        <div>
            <header
            className="py-3 fixed w-full bg-gray-700 border border-gray-700 flex justify-around items-center"
            >
                <div>
                    <h1
                    className="text-xl font-semibold"
                    >
                        Room :<span>Family Room</span> 
                    </h1>
                </div>

                <div>
                    <h1
                    className="text-xl font-semibold"
                    >
                        User : <span>Asmit Srivas</span>
                    </h1>
                </div>

                <div>
                    <button
                    className="bg-red-500 hover:bg-red-600 px-3 py-2 rounded"
                    >
                    Leave Chat
                    </button>
                </div>
            </header>

            <div className="flex fixed bottom-2 w-full h-16" >
                <div
                className="gap-2 flex h-full border w-2/3 mx-auto bg-gray-900 rounded items-center justify-between px-10"
                >
                    <input type="text" placeholder="Type your message here..." className="border-gray-900 px-3 py-2 rounded  h-full w-full" />
                    <button
                    className="bg-green-600 px-3 py-2 rounded-full flex justify-center items-center rounded h-10 w-10"
                    >   
                        <IoMdSend />
                    
                    </button>
                </div>

                
            </div>
        </div>
    );
}

export default ChatPage;