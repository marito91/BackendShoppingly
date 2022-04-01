const { model, Schema } = require("mongoose");


const usersSchema = new Schema(
    {
        first : {
            type : "string",
            required: true
        },
        last : {
            type : "string",
            required: true
        },
        document : {
            type : "string",
            required : true
        },
        birthdate : {
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
        newsletter : {
            type : "boolean",
            required : true
        },
        offers : {
            type : "boolean",
            required : true
        },
        nation : {
            type : "boolean",
            required : true
        },
        username : {
            type : "string",
            required : true
        },
        password : {
            type : "string",
            required : true
        },
    },
    {
        versionKey : false
    }
);

const usersModel = model("users", usersSchema);

exports.usersModel = usersModel;