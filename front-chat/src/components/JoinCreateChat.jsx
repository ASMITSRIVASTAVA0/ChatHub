import React from "react";
// import { FaRocketchat } from "react-icons/fa6";
import {useState} from "react";
import toast from 'react-hot-toast';
import {  createRoom2 } from "../../services/RoomService";


const JoinCreateChat=()=>{

    const [detail,setDetail]=useState({
        roomId:"",
        userName:""
    });


    function handleFormInputChange(event){
        setDetail({
            ...detail,
            [event.target.name]:event.target.value,
        });
    }

    function validateForm(){
        if(detail.roomId===""||detail.userName===""){
            toast.error("Invalid Name or RoomId");
            return false;
        }
        return true;
    }

    function joinChat(){
        if(validateForm()){
            console.log(detail);
        }
    }

    async function createRoom(){
        if(validateForm()){
            console.log(detail);

            try{
                const response=await createRoom2(detail.roomId);
                console.log(response);
                toast.success("Room created Succcessfull !");
                joinChat();
            }
            catch(error){
                console.log(error);
                console.log("Error in creating Room");
            }
        }
    }

    return(
        <div className="min-h-screen flex  items-center justify-center " >

            <div className="p-8 border-white-500 flex flex-col gap-5 w-full max-w-md rounded bg-gray-900 shadow">
                <div
                className="flex items-center justify-center"
                >
                    <h1
                    className="text-5xl font-bold text-yellow-400 mb-10 "
                    >ChatHub</h1>
                    
                </div>
                <h1 className="text-2xl font-semibold text-center" >
                    Join Room / Create Room 
                </h1>
                <div className="" >
                    <label 
                    htmlFor="name" 
                    className="block font-medium mb-2" >
                        Your Name
                    </label>
                    <input 
                    type="text" 
                    id="name"
                    className="w-full bg-gray-600 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 "
                    onChange={handleFormInputChange}
                    value={detail.userName}
                    name="userName"
                    placeholder="Enter your name"
                    />
                </div>


                <div className="" >
                    <label 
                    htmlFor="roomid" 
                    className="block font-medium mb-2" 
                    >Room Id</label>
                    <input 
                    type="text" 
                    id="roomid"
                    className="w-full bg-gray-600 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 "
                    name="roomId"
                    onChange={handleFormInputChange}
                    value={detail.roomId}
                    placeholder="Enter your roomId"
                    />
                </div>

                <div className="flex justify-center gap-10 mt-7" >
                    <button
                    className="px-3 py-2 bg-blue-600 hover:bg-blue-700 rounded"
                    onClick={joinChat}
                    >Join Room</button>

                    <button
                    className="px-3 py-2 bg-green-500 hover:bg-green-600"
                    onClick={createRoom}
                    >
                    Create Room
                    </button>
                </div>
            </div> 

            
        </div>
    ) 
};

export default JoinCreateChat;