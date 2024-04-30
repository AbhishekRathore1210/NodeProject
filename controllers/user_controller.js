const profile = async(req,res)=>{
    try {
        return res.end('<h1>This is Profile</h1>');
    } catch (error) {
        console.log(error.message);
    }
}

const signUp = async(req,res)=>{
    try {
        return res.render('user_sign_up',{title:'Sign Up'});
    } catch (error) {
        console.log(error.message);
    }
}

const signIn = async(req,res)=>{
    try {
        return res.render('user_sign_in',{title:'Sign In'});
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    profile,
    signUp,
    signIn
}