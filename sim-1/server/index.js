const express = require ('express');
const massive = require ('massive');
const bodyParser = require ('body-parser');
const cors = require ('cors');
const shelf_controller = require ('./controllers/shelf_controller');
const bin_controller = require ('./controllers/bin_controller')

require('dotenv').config();

const port = 5050;
const app = express();

app.use( bodyParser.json());
app.use( cors());

massive(process.env.CONNECTION_STRING).then(dbInstance=>{
    app.set('db', dbInstance)
}).catch(err => {
    console.error(err);
})

//INITIAL SHELF REQUEST TO GET ALL SHELVES
app.get('/api/shelves', shelf_controller.getShelves)

//SHELF REQUEST TO DISPLAY A SHELVES BINS
app.get('/api/shelf/:id', shelf_controller.getOneShelf)

//BIN REQUESTS
app.get('/api/bin/:id', bin_controller.getBin)
app.put('/api/bin/:id', bin_controller.editBin)
app.put('/api/bins/:id', bin_controller.deleteBin)
// app.post('/api/bin/:id', bin_controller.createBin)

app.listen( port, () => console.log("listening on port", port))