import React from "react";

const JoinCreateChat=()=>{
    return(
        <div className="min-h-screen flex items-center justify-center " >

            <div className="p-8 flex flex-col gap-5 w-full max-w-md rounded bg-gray-900 shadow">
                <h1 className="text-2xl font-semibold text-center" >
                    Join Room / Create Room
                </h1>
                <div className="" >
                    <label htmlFor="name" className="block font-medium mb-2" >Your Name</label>
                    <input type="text" id="name"
                    className="w-full bg-gray-600 px-4 py-2 border "
                    />
                </div>
            </div>  
        </div>
    ) 
};

export default JoinCreateChat;