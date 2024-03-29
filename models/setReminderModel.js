import mongoose from 'mongoose';
import moment from 'moment-timezone';

const SetReminderSchema = new mongoose.Schema(
    {
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
        },
        reminderPlatform: {
            type: String,
            default: ''
        },
        sendReminder: {
            type: Boolean,
            default: false
        },
        expired: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true
    }
);

SetReminderSchema.pre('save', function (next) {
    if (!this.createdAt) {
        this.createdAt = moment.tz('Asia/Kolkata').toDate();
    }
    next();
});

export default mongoose.models.Reminder || mongoose.model('Reminder', SetReminderSchema);
