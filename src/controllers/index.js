function rootController(req, res){
    res.status(200).send('Hello I\'m here!')
  }
  
  function nameController(req, res){
    const { name = 'Antonio' } = req.query; 
    res.status(200).send(`Hello my name is ${name}`);
  }
  
  module.exports = {
    rootController,
    nameController,
  }