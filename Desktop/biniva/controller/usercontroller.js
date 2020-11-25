const mongoose = require('mongoose');
const User = mongoose.model('User');
const fetch = require('node-fetch');

exports.get_client = async (req, res) => {
try{
        let api_data_response = await fetch("http://dummy.restapiexample.com/api/v1/client");
    if (api_data_response.ok) {
        let client_json = await api_data_response.json();
        response.status(200).json(client_json);
      } else {
        console.log("HTTP-Error: " + api_data_response.status);
      }
    }catch(e){
        console.log('Error is:');
        console.log(e);
    }
}
exports.get = async (request, response) => {
    const listofclient = await Client.find({});
    return response.status(200).json(listofclient);

}

exports.store =  async (request, response)=>{
    let {id, client_name, client_salary, client_age, profile_image} = request.body
    let client = new Client();
    client.id = id;
    client.client_name = client_name;
    client.client_age = client_age;
    client.client_salary = client_salary;
    client.profile_image = profile_image;
    await client.save();
    return response.status(201).json(client);
}

exports.update = async (request, response) => {
    let {id, client_name, client_salary, client_age, profile_image} = request.body
    let client = await Client.findById(request.params.id);
    if(!client){
        return response.status(204).json({'error': 'Client Data not found'});
    }else{
        client.id = id;
    client.client_name = client_name;
    client.client_age = client_age;
    client.client_salary = client_salary;
    client.profile_image = profile_image;
    return response.status(201).json(client);
}
}

exports.destroy = async (request, response)=> {
    let client = await Client.findById(request.params.id);
    if(!client){
        return response.status(204).json({'error': 'Client Data not found'});
    }else{
        await client.remove();
        return response.status(204).json(client);
    }
}

exports.getById = async (request, response) =>{
    let client = await Client.findById(request.params.id);
    return response.status(200).json(client);
}
