'use strict';
var mongoose = require('mongoose');
const  Schema = mongoose.Schema;

var resturanSchema = new Schema({
    name: { type : String , unique : true, required : true},
    logo_url:{type : String ,required : true},
    openingTime:{type : String ,required : true},
    closingTime:{type : String ,required : true},
    manue:[],
    extras:[],
    //referencing the orders schema for one to many relationship
    orders:[{
            type: Schema.Types.ObjectId,
            ref: 'Order'
        }]
}, { timestamps: { createdAt: 'created_at' } });

module.exports = mongoose.model('Resturent', resturanSchema);