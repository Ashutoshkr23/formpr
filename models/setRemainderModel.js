import mongoose from 'mongoose';

const SetRemainderSchema = new mongoose.Schema({
    cardUuid: {
        type: String,
        default: ''
    },
    name: {
        type: String,
        default: ''
    },
    contactNumber: {
        type: String,
        default: ''
    },
    userEmail: {
        type: String,
        default: ''
    }
}, {
    timestamps: true
});

export default mongoose.models.Remainder || mongoose.model('Remainder', SetRemainderSchema);