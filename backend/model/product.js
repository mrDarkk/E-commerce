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
    Color: {
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
        required: true
    },
    // Category: {
    //     type: String,
    //     required: true
    // },
    Sizes: {
        type: String,
        required: true
    },
    isAvailable: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Product', ProductSchema);