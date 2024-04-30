const home = async(req,res)=>{
    try {   
        return res.end('<h1>This is Home Page</h1>');
        
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = home;