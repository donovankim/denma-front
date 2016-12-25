import * as MongoDB from 'mongoose';

MongoDB.connect("mongodb://127.0.0.1:27017/test", () => {
    console.log("connected to mongo.");
});

export { MongoDB } ;