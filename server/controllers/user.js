let user = require("../models/user");
let async = require("async");
const passport = require("passport");
let JSWT = require("../config/jwt");
let jwt = require("jsonwebtoken");


   exports.login = function(req, res){
        passport.authenticate('local', {session: false}, (err, user, info) => {
            if (err || !user) {
                console.log(err)
                return res.status(400).json({
                    message: 'Something is not right',
                    user   : user
                  
                });
            }
           req.login(user, {session: false}, (err) => {
            user.profile.online = 1;
            user.profile.lastLogin = new Date();

            user.save()
               if (err) {
                   res.send(err);
               }

            
                 // generate a signed son web token with the contents of user object and return it in the response
                 const token = jwt.sign(user.toObject(), JSWT.secret);
                 return res.json({success:true, user, token});
                   }
               )

           
        })(req, res);
    }

   exports.register = function(req, res){
        console.dir(req.body);
        
                User.create(req.body)
                
                .then(result=> {
                    
                        res.status(200).json({
                            success: true,
                            message: 'You have successfully  registered',
                            id: result._id
                        });
                    
                })            
                .catch(err=> {
                    console.log(err)
                    if(err.errmsg.indexOf("E11000 duplicate key error index: farmco.users.$username_") != -1)
                    {
                        res.status(200).json({
                            success: false,
                            message: 'Username already taken. Kindly select another one',
                            err: err.errmsg
                        });
                    } 
                    else if(err.errmsg.indexOf("E11000 duplicate key error index: farmco.users.$email") != -1)
                    {
                        res.status(200).json({
                            success: false,
                            message: 'Email address already taken',
                            err: err.errmsg
                        });
                    }else{
                        res.status(200).json({
                            success: false,
                            message: 'An error occured',
        
                        });
                    }
                    
                  });
            
        
    
      
        
        
    }


    /* exports.profile = function(req, res){
    let id = req.params.userId;

    User.findOne({_id : id}, (foundUser)=>{
        res.json({
            success : true,
            profile : foundUser.profile
        })
    })
    },

    exports.editProfile = (req, res)=>{
        let id = req.params.userId;
        User.findByIdAndUpdate(id, (user)=>{
            user.profile = req.body;
        }).then((user)=>{
            res.json({
                success : true,
                message : "You have successfully updated your profile!"
            })
        })

    }

exports.logout = (req, res)=>{
    let id = req.params.userId;
    user.findByIdAndUpdate(id, function(user){
        user.profile.online = 0;
    });

    res.json({
        success:true,
        message : "You have successfully logged out."
    })
}
 */