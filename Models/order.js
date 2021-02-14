const mongoose= require('mongoose');
const {Schema} = require('mongoose');

const orderSchema = new Schema({
   client_id: String,
   resturant: {
      type: Schema.Types.ObjectId,
      ref: 'Resturent',
      required: true
   }
});

module.exports = mongoose.model('Order', bookSchema);