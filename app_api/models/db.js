const mongoose = require('mongoose'); 

const userSchema = new mongoose.Schema({
name: {type: String, required: true},
username: {type: String, required: true},
email: {type: String, required: true},
pword: {type: String, required: true},
});   

const stopSchema = new mongoose.Schema({
name: {type: String, 
default: ""},
x: {type: Number},
y: {type: Number}
});

const busSchema = new mongoose.Schema({
name: {type: String, required: true},
locations: [{type: String}],
stops: [stopSchema],
});

/*
SAMPLE DATA

db.users.insertOne({name: 'John OMahoney', username:'bloonMan1998',email:'JOM@gmail.com', pword:'literally1984'});

db.buses.insertOne({name:'Power Travel',locations:['Tralee','Dingle','Killarney'], stops:[{name: 'Stokers', x:1, y:1},{name:'',x:2,y:2},{name:'Supervalu', x:3, y:3}]});
*/