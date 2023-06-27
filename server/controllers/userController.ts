import database from '../models/travelModel';
import bcrypt from 'bcryptjs';

const userController = {};

//registering a user
userController.registerUser = async (req,res,next) => {
    //destructure username, password, and name from the request body
    const { username, password, name } = req.body;

    //if there is no username, password, or name pass to global error handler
    if (!username || !password || !name){
        return next({
            log:'Error occured in userController.registerUser',
            status:400,
            message: {
                err: 'An error occured in userController.registerUser. Username, password or name was not inputted',
            },
        });
    }
    //username password and name does exist
    try {
        //hash the password using bcrypt
        const hashedPassword = await bcrypt.hash(password,10);
        
        const 
    }
}
