import express from 'express';
import {router} from "./routes.js";
import cors from 'cors';
const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());
app.use('/api', router);


app.listen(port, () => {
    console.log(`Serwer działa na http://localhost:${port}`);
});