const { model, Schema } = require("mongoose");


const usersSchema = new Schema(
    {
        id : {
            unique : true,
            type : "number",
            required : true
        },
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
            type : "number",
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
        }
    }
);

const usersModel = model("users", usersSchema);

exports.usersModel = usersModel;