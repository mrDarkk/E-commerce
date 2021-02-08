const mongoose = require("mongoose");

var ProductSchema = new  mongoose.Schema({
    ProductName: {
        type: String,
        required: true,
    },
    Brand: {
        type: String,
        required: true,
    },
    Price: {
        type: String,
        required: true,
    },
    Category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        // required: true
    },
    isAvailable: {
        type: String,
        default: "true"
        // required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Product', ProductSchema);