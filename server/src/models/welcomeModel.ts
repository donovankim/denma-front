import { MongoDB } from '../database';
import { Model, Schema, Document } from 'mongoose';

interface IWelcome extends Document {
    name: string;
    adult?: boolean;
}

let welcomeSchema = new Schema({
    name: String,
    adult: Boolean,
    createdAt: Date
}).pre('save', function(next) {
    let now = new Date();
    if (!this.createdAt) this.createdAt = now;
    next();
});

let Welcome = MongoDB.model<IWelcome>("Welcome", welcomeSchema);

export { Welcome };