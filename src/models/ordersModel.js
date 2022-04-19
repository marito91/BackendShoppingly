const { model, Schema } = require("mongoose");


const ordersSchema = new Schema(
    {
        first : {
            type : "string",
            required: true
        },
        products : {
            type : "array",
            required : true
        },
        date : {
            type : "string",
            required : true
        },
        email : {
            type : "string",
            required : true
        },
        phone : {
            type : "string",
            required : true
        },
        address : {
            type : "string",
            required : true
        },
        name : {
            type : "string",
            required : true
        },
        message : {
            type : "string",
            required : true
        },
        status : {
            type : "string",
            required : true
        }
    },
    {
        versionKey : false
    }
);

const ordersModel = model("orders", ordersSchema);

exports.ordersModel = ordersModel;