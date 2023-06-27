import mongoose from 'mongoose';

const SetRemainderSchema = new mongoose.Schema({
    cardUuid: {
        type: String,
        default: ''
    },
    puuid: {
        type: String,
        default: ''
    },
    name: {
        type: String,
        default: 'John Doe'
    },
    contactNumber: {
        type: String,
        default: ''
    },
    userEmail: {
        type: String,
        default: ''
    },
    customMessage: {
        type: String,
        default: ''
    },
    customDate: {
        type: String,
        default: ''
    }
}, {
    timestamps: true
});

export default mongoose.models.Remainder || mongoose.model('Remainder', SetRemainderSchema);