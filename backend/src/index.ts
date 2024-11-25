import express from 'express';
import cors from 'cors';
import { configDotenv } from 'dotenv';
import routes from './routes';

configDotenv()

const port: number = Number.parseInt(process.env.PORT || "4000") ;

const app = express();
app.use(cors({
    origin: "*"
}))

app.use(express.json());    
app.use('/api/', routes);

app.listen(port, () => {
    console.log(`running at ${port}`);
})