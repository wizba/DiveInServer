//this method will be used to insert rsturant in the database
const Resturant = require('../Models/resturant.js')
exports.createResturent = async (req, res)=> { 
    try{
        const resturent = new Resturant(req.body);
        await resturent.save();
        Resturant.find((error,data)=>{
            res.status(201).json(data);
        });
    }
    catch (err) {
        res.status(400).json({success: false, message:err.message});
     }
}

exports.update = async (req, res)=> { 
    const id = req.params.id;
    console.log(req.body)
    Resturant.findByIdAndUpdate(id, req.body, function(err, result) {
        if (err) {
            res.status(400).json(err);
        } else {
           
            Resturant.find((error,data)=>{
                res.status(201).json(data);
            })
        }
      });

}

exports.delete =(req, res)=> { 
    const id = req.params.id;
    console.log(req.body)
    Resturant.findByIdAndDelete(id, req.body, function(err, result) {
        if (err) {
            res.status(400).json(err);
        } else {
           
            Resturant.find((error,data)=>{
                res.status(201).json(data);
            })
        }
      });
}

exports.get =(req, res)=> { 
  
    Resturant.find((error,data)=>{
        if (error) {
            res.status(400).json(err);
        } else {
        res.status(201).json(data);
        }
    });
           
}