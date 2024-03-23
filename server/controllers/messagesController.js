const messageModal = require("../model/messageModal");

module.exports.addMessage = async(req,res,next)=>{
    try {
        const {from,to,message} = req.body
        const data = await messageModal.create({
            message : {text : message},
            users:[from,to],
            sender : from

        })
        if(data) return res.json({msg:"Message added..!"})

        return res.json({msg:"Failed "})
    } catch (error) {
        console.log(error);
        next(error)
    }
}
module.exports.getAllMessage = (req,res,next)=>{
    try {
        
    } catch (error) {
        console.log(error);
        next(error)
    }
}
