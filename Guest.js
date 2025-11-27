const mongoose = require('mongoose');

const GuestSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, default: 'Guest' }, // e.g., Bride's side, Groom's side
  status: { type: String, default: 'Pending' }, // Confirmed, Pending, Declined
  email: String
});

module.exports = mongoose.model('Guest', GuestSchema);