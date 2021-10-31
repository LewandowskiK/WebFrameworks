const login =  function(req, res) {
  res.render('login', { title: 'BusFindr' });
};

const register = function(req, res) {
  res.render('register', { title: 'BusFindr' });
};

const buses = function(req, res) {
  res.render('buses-list', { title: 'BusFindr', 
  buses:[{name:"Power Travel", locations:["Tralee","Dingle","Killorglin"], stops:[]},
  {name:"Hanafins Bus Services", locations:["Tralee","Killarney","Killorglin"], stops:[]},
  {name:"People's bus", locations:["Tralee","Dingle","BlennerVille"], stops:[]},
  {name:"Rose Travel", locations:["Tralee","Dingle","Killorglin"], stops:[]},
  {name:"ICT Connections", locations:["Tralee","Killarney","Killorglin"], stops:[]},
  {name:"Joes Rides", locations:["Tralee","Dingle","BlennerVille"], stops:[]},
  {name:"Kevin McGrath Services Ltd.", locations:["Tralee","Dingle","Killorglin"], stops:[]},
  {name:"Joes Bus Services", locations:["Tralee","Killarney","Killorglin"], stops:[]},
  {name:"Party Bus", locations:["Tralee","Dingle","BlennerVille"], stops:[]}] 
})
};

module.exports = {
  login,
  register,
  buses
};