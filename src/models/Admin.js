const mongoose = require('../database');
const bcrypt = require('bcryptjs');
const AdminSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
    },
    password: {
        type: String,
        require: true,
        select: false
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});
AdminSchema.pre('save', async function(next) {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;

    next();
})
const Admin = mongoose.model('Admin', AdminSchema);

module.exports = Admin;