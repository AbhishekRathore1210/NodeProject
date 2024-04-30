const home = async(req,res)=>{
    try {   
        return res.render('home',{
            title:"HOME"
        });
        
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    home
}