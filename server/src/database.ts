import * as mongoose from 'mongoose';

mongoose.connect("mongodb://127.0.0.1:27017/test", () => {
    console.log("connected to mongo.");
});

export { mongoose as MongoDB };