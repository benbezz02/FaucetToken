const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const transferSchema = new mongoose.Schema({
    id: {
        type: Number,
        unique: true
    },
    dateTime: {
        type: Date,
        default: Date.now
    },
    COSMOS: {
        type: String,
        required: [true, "Please enter the Cosmos Address"],
    },
    ETH: {
        type: String,
        required: [true, "Please enter the Ethereum Address"],
    }
});

transferSchema.plugin(AutoIncrement, { inc_field: "id" });

module.exports = mongoose.model("Transfer", transferSchema)