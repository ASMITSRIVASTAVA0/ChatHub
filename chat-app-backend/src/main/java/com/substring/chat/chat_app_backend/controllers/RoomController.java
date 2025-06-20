package com.substring.chat.chat_app_backend.controllers;


import com.substring.chat.chat_app_backend.entities.Message;
import com.substring.chat.chat_app_backend.entities.Room;
import com.substring.chat.chat_app_backend.repositories.RoomRepository;
import lombok.Getter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.ArrayList;

@RestController
@RequestMapping("/api/v1/rooms")
@CrossOrigin("https://localhost:3000")
public class RoomController {


    private final RoomRepository roomRepository;

//    @Autowired
    private RoomController(RoomRepository roomRepository){
        this.roomRepository=roomRepository;
    }

//    create room
    @PostMapping
    public ResponseEntity<?> createRoom(@RequestBody String roomId){
        if(roomRepository.findByRoomId(roomId)!=null){
            return ResponseEntity.badRequest().body("room already exists");
        }

        Room room=new Room();
        room.setRoomId(roomId);

        Room savedRoom=roomRepository.save(room);

        return ResponseEntity.status(HttpStatus.CREATED).body(room);
    }

    //get room:join
    @GetMapping("/{roomId}")
    public ResponseEntity<?> joinRoom(@PathVariable String roomId){
        System.out.println("get req for roomid="+roomId);
        Room room=roomRepository.findByRoomId(roomId);
        if(room==null)
            return ResponseEntity.badRequest().body("Room not found");

        return ResponseEntity.ok(room);
    }

    @GetMapping("/{roomId}/messages")
    public ResponseEntity<List<Message>> getMessage(
            @PathVariable String roomId,
            @RequestParam(value="page",defaultValue="0",required=false) int page,
            @RequestParam(value="size",defaultValue="20",required=false) int size
    ){
        Room room=roomRepository.findByRoomId(roomId);
        if(room==null)
            return ResponseEntity.badRequest().build();


        List<Message> messages=room.getMessages();

        int start=Math.max(0,messages.size()-(page+1)*size);
        int end=Math.min(messages.size(),start+size);

        List<Message> paginatedMessage=messages.subList(start,end);
        return ResponseEntity.ok(paginatedMessage);
    }

}
