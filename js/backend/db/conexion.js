const mongoose = require('mongoose');

async function connect(req,res) {
    const {user,password} = req.body;
    try {
        mongoose.connect(`mongodb+srv://${user}:${password}@cluster0.mgim8nd.mongodb.net`);
        console.log('>>> DB is connected');
        res.status(200).json({msg:"Conexion exitosa"});
    } catch (error) {
        console.log(error);
    }
}

module.exports = {connect};