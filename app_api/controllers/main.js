const mongoose = require('mongoose');
const Bus = mongoose.model('Bus');

const getBusList = function (req, res) {
    let results = async (req, res)=>{
        let buses = await Bus.find();
        return buses;
    };

    let buses = [];

    results.forEach((bus) => {
        let stops = [];
        bus.stops.forEach((stop) => {
            stops.push({
                name: stop.name,
                x: stop.x,
                y: stop.y
            });
        });

        let locations = [];
        bus.locations.forEach((loc) => {
            locations.push(loc);
        });

        buses.push({
            name: bus.name,
            locations: locations,
            stops: stops
        });
    });

    return buses;
}

module.exports = {
    getBusList
};
