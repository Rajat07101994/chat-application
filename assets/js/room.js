$(function() {

    $("#newroom").click(newroom); 
    function newroom()
    {
        var roomname = prompt("enter room name");
        console.log("roomname"+ roomname);
        io.socket.post('/room1',{name: roomname,roomType: "public"},function(data,err){
            console.log("room created"+data);
        addroom(data);
         

           
    });
     function addroom(data){
        var roomListEl = $('.chat-page .room-list');
        var roomEl = $('<li>'+roomname +'</li>');
        roomListEl.append(roomEl);
        console.log("sfdfdf");
        io.socket.on(data, function (data1){
            console.log(data1.greeting);
          });
     }
       
        
    }
});
