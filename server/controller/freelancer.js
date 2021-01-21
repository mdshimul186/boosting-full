const Freelancer = require("../models/freelancer.model");



//--------------------------------------------------------------------------------------------------------------
exports.createFreelancer = (req,res)=>{
    const {name,gender,location,skills,title,experience,industry,contacts,portfolios} =req.body
    const file = req.file

    if(!name || !gender ){
        return res.status(400).json({error:"name and gender is required"})
    }

    let _freelancer = new Freelancer({
        name,
        gender,
        location,
        skills,
        title,
        experience,
        industry,
        contacts:JSON.parse(contacts),
        portfolios:JSON.parse(portfolios),
        creator:req.user._id,
        profile: file ? file.path :''
    })

   // console.log(contacts,_freelancer)

    _freelancer.save()
    .then(freelancer=>{
        res.status(200).json({success:true,freelancer})
    })
    .catch(err=>{
        console.log(err)
        res.status(400).json({error:"Something went wrong"})
    })
}

//-----------------------------------------------------------------------------------------------------------------
exports.editFreelancer = (req,res)=>{
    const {name,gender,location,skills,title,experience,industry,contacts,portfolios} =req.body
    const file = req.file
    const freelancerId = req.params.freelancerid
console.log(name,gender)
    if(!name || !gender || !freelancerId ){
        return res.status(400).json({error:"name and gender is required"})
    }

    let options = {
        name,
        gender,
        location:location||'',
        skills:skills||'',
        title:title||'',
        experience:experience||'',
        industry:industry||'',
        title:title||'',
    }
 
  

   
    if(contacts){
        options.contacts = JSON.parse(contacts)
    }
    if(portfolios){
        options.portfolios = JSON.parse(portfolios)
    }
    if(file){
        options.profile = file.path
    }
   

    Freelancer.findByIdAndUpdate(freelancerId,{$set:options},{new:true})
    .then(freelancer=>{
        res.status(200).json({success:true,freelancer})
    })
    .catch(err=>{
        
        res.status(400).json({error:"Something went wrong"})
    })
}

//----------------------------------------------------------------------------------------------------------------
exports.getAll=(req,res)=>{
    Freelancer.find()
    .sort("-createdAt")
    .then(freelancers=>{
        res.status(200).json({success:true,freelancers})
    })
    .catch(err=>{
        res.status(400).json({error:"Something went wrong"})
    })
}
//------------------------------------------------------------------------------------------------------------------
exports.deleteFreelancer=(req,res)=>{
    let freelancerId = req.params.freelancerid
    Freelancer.findByIdAndDelete(freelancerId)
    .then(freelancer=>{
        res.status(200).json({success:true})
    })
    .catch(err=>{
        res.status(400).json({error:"Something went wrong"})
    })
}

