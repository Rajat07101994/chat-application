/**
 * RoomController
 *
 * @description :: Server-side logic for managing rooms
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    
     create : function(req,res){
                console.log("room controllersession" + req.session.user_id);
                Createroom.create({
                    room_name :req.body.name,
                    room_type : req.body.roomType,
                    created_by : req.session.user_id, 
                }).exec(function(err,data){
                     if(err)
                        {
                            return res.serverError(err);
                        }
                        else{
                            console.log("room is created" + data);
                            return res.ok(req.body.name);
                        }
                });
                
        
     },
      login : function(req,res){
              console.log("login");
              Createroom.findOne({
                room_name : req.body.room_name
              }).exec(function(err,data){
                if(err)
                    {
                        return res.serverError(err);
                    }
                    else{
                        console.log("room is logged in");
                        req.session.room_id = data.id;
                        console.log("session" + req);
                    }
              });
             
      },
      'join' : function(req,res){
            
      }
};

