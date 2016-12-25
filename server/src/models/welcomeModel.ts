import { MongoDB } from '../database';
import { Model, Schema, Document } from 'mongoose';

interface IWelcome extends Document {
    name: string;
    adult: boolean;
}

let welcomeSchema = new Schema({
    name: String,
    adult: Boolean
});

let Welcome = MongoDB.model<IWelcome>("Welcome", welcomeSchema);

export { Welcome };