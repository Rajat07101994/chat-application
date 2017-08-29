/**
 * HomepageController
 *
 * @description :: Server-side logic for managing homepages
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

     create: function(req,res)
                {
                    console.log("hello");
                    User.create({
                     username : req.body.username,
                     name : req.body.name,
                     email : req.body.email,
                     password: req.body.passwd,
                    }).exec(function(err,User){
                            if (err) { return res.serverError(err); }
                            else 
                            {
                                 console.log("new user created");
                            }
                    });
                     return res.view('login');
                },
     login:  function(req,res){
             
            console.log(req.body.username+req.body.password);
             User.findOne({
                 username : req.body.username,
                 password : req.body.password,
             }).exec(function(err,data){
                 if(err)
                    {
                      return res.serverError(err);  
                    }
                    else{
                        console.log("user find"+ data);
                        console.log("username"+ data.username);
                        console.log("username"+ data.id);
                        req.session.username = data.username;  
                        console.log("session" + req.session.username);
                        console.log("Updating session id");
                        req.session.user_id = data.id;
                        console.log("session" + req.session.user_id);
                        return res.view('chat');  
                        //return res.json(data.username,data.id);
                    }
             });
            console.log("Response Return")
                 
     }
               
                
};

