import React from "react";
import { IoMdAttach, IoMdSend } from "react-icons/io";
import { useState, useRef } from "react";


const ChatPage=()=>{
    const [messages,setMessages]=useState([
        {sender:"asmit",content:"hi"},
        {sender:"shivesh",content:"hi"},
        
    ]);
    const [input,setInput]=useState("");
    const inputRef=useRef(null);
    const chatBoxRef=useRef(null);
    const [stompClient,setStompClient]=useState(null);
    const [roomId,setRoomId]=useState("");
    const [currentUser]=useState("asmit");

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
                    className="bg-rose-500 hover:bg-red-600 px-3 py-2 rounded"
                    >
                    Leave Chat
                    </button>
                </div>
            </header>



            <main
            className="py-24 border bg-slate-600 w-3/4 mx-auto h-screen overflow-auto "
            >
                {
                    messages.map((message,index)=>(
                        <div key={index} 
                        // className="flex justify-end px-6" 
                        className={`flex ${message.sender===currentUser?"justify-end":"justify-start"} px-6`}
                        >
                            <div
                            // className="my-2 bg-blue-600 w-rounded p-2 max-w-xs "
                            className={`my-2 ${message.sender===currentUser?"bg-green-800":"bg-gray-800"} w-rounded -2 max-2-xs`}
                            >
                                <img 
                                src={"https://avatar.iran.liara.run/public/21"} 
                                alt="" 
                                className="h-10 w-10"
                                />
                                <div className="flex flex-row gap-1" >
                                    <p
                                    className="text-sm font-bold"
                                    >
                                        {message.sender}
                                    </p>
                                    <p>{message.content}</p>
                                </div>
                            </div>
                        </div>
                        
                    ))
                }
                
            </main>



            <div className=" fixed bottom-4 w-full h-16" >
                <div
                className="gap-2 flex h-full   w-2/3 mx-auto bg-gray-900 rounded-full items-center justify-between pr-5"
                >
                    <input type="text" placeholder="Type your message here..." className="border-gray-500 bg-gray-800 px-5 py-2  rounded-full  h-full w-full  focus:outline-none " />

                    <div className="flex  gap-2">   
                        <button
                        className="bg-yellow-400 px-3 py-2 rounded-full flex justify-center items-center rounded h-10 w-10 "
                        >   
                            <IoMdAttach />
                        </button>

                        <button
                        className="bg-green-600 px-3 py-2 rounded-full flex justify-center items-center rounded h-10 w-10 "
                        >   
                            <IoMdSend />
                        
                        </button>
                    </div>
                    
                </div>

                
            </div>
        </div>
    );
}

export default ChatPage;