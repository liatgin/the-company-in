import express from 'express';
import pool from './dbconfig/dbconnector';
import MasterRouter from './routers/MasterRouter';

class Server {
    private app;

    constructor() {
        this.app = express();
        this.dbConnect();
        this.routerConfig();

    }

    private dbConnect() {
        pool.connect(function (err: any) {
            if (err) {
                console.log('Error in DB', Error(err))
            }
            console.log('Connected');
        }); 
    }

    private routerConfig() {
        this.app.use('/api', MasterRouter);
    }
    
    public start = (port: number) => {
        return new Promise((resolve, reject) => {
            this.app.listen(port, () => {
                resolve(port);
            }).on('error', (err: Object) => reject(err));
        });
    }
}

export default Server;