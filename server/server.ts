import * as express from 'express';
import { Application } from 'express';

const bodyParser = require('body-parser');
const app: Application = express();

app.use(bodyParser.json())

const httpServer = app.listen(9000, () =>{
    console.log("HTTP REST API Server running at http://localhost:" + httpServer.address().port);
});