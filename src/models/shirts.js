const { model, Schema } = require("mongoose");


const shirtsSchema = new Schema(
    {
        id : {
            unique : true,
            type : "number",
            required : true
        },
        gender : {
            type : "string",
            required: true
        },
        name : {
            type : "string",
            required : true
        },
        price : {
            type : "number",
            required : true
        },
        sizes : {
            type : "array",
            required : true
        },
        stock : {
            type : "array",
            required : true
        },
        img1 : {
            type : "string",
            required : true
        },
        img2 : {
            type : "string",
            required : true
        }
    }
);

const shirtsModel = model("shirts", shirtsSchema);

exports.shirtsModel = shirtsModel;