var express = require('express');       //Henter inn express-rammeverket
var app = express();                    //Lager en epress-app
var port = process.env.port || 8080     //Bestemmer porten man lytter på, feks. localhost:8080

app.set('view engine', 'jade');         //Sier at vi bruker jade-templater
app.use(express.static(__dirname + '/views'));  //Og at disse ligger i views-mappa

var router = express.Router();          //Vi lager en dings som holder styr på rutene(URL-ene)

//Trenger ikke å bry seg om det over her
//Her kan man lage en rute for hver URL på nettsiden og bestemme hvilken mal som skal rendres
router.get("/", function(req, res) {
    res.render('Index', {text: "Hello World"});
});

router.get("/meg", function(req, res) {
    res.render('Index', {text: "Hello back"});
});

//Trenger ikke bry seg så hardt om det under her heller

app.use("/", router);                   //Nå sier vi at appen skal bruke rutene vi har definert over
app.listen(port);                       //"Skru på" appen

console.log("Magic is due on port " + port);    //Hvis alt funka printer vi dette og portnummeret