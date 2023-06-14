const mongoose = require("mongoose")
mongoose.set('autoCreate', false);

const allowedUsersSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    universityName: {
        type: String,
        required: true
    },
    couponCode: {
        type: String,
        default: "LSA10"
    },
    discountPercentage: {
        type: Number,
        default: 10
    },
}, { timestamps: true })

export default mongoose.models.allowedUsers || mongoose.model('allowedUsers', allowedUsersSchema);