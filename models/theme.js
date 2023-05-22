import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';


const ThemeSchema = new mongoose.Schema({
    themeId: { type: String, default: uuidv4, unique: true },
    mainBackground: { type: String },
    innerBackground: { type: String },
    contactButtonColor: { type: String },
    contactButtonFontColor: { type: String },
    primaryFontColor: { type: String },
    secondaryFontColor: { type: String },

});

export default mongoose.models.Theme || mongoose.model('Theme', ThemeSchema);