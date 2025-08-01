//part of code responsible for handling app's logic
//typically used to process requests, interact with databases, and send responses


//home

//whenever we use async function, we need to use try catch block
const home =  async (req, res) => {
    try {
        res
        .status(200)
        .send("welcome to the home page using controller");
    }catch(error){
        console.log(error);
    }

}
const register = async (req, res) => {
    console.log(req.body);
    // console.log(req.query); //for query params
    try {
        res
        .status(200)
        // .send("welcome to the registeration page using controller");
        .send(req.body); //to send the data received from the client
    }catch(error){
        res.status(500).send("Internal Server Error");
    }
}



module.exports = {home, register};
