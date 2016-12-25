import { MongoDB } from '../database';
import { Model, Schema, Document } from 'mongoose';

interface IWelcome extends Document {
    name: string;
    adult?: boolean;
}

let welcomeSchema = new Schema({
    name: String,
    adult: Boolean,
    created: {
        type:Date,
        default: Date.now
    },
    updated: {
        type:Date,
        default: Date.now
    }
}).pre('save', function(next) {
    this.updated = new Date();
    next();
});

let Welcome: Model<IWelcome> = MongoDB.model<IWelcome>("Welcome", welcomeSchema);
export { Welcome };
