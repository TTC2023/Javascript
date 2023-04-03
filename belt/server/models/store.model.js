const mongoose = require('mongoose');

const StoreSchema = new mongoose.Schema({
        name: { type: String,
                required: [true, "Store name is required"],
                minlength: [2, "Name must be at least 3 characters long"],
            },
        number: {type: Number,
                required: [true, "Store number must be greater than 0"]},
        status: {type: String,
                enum: ["Open","Not Open"],
                default: "Not Open"}
    }, { timestamps: true });

module.exports = mongoose.model('Store', StoreSchema);