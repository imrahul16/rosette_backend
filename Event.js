const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  date: { type: String, required: true }, // e.g., "2024-12-14"
  time: { type: String, required: true }, // e.g., "10:00 AM"
  location: { type: String, required: true },
  type: { type: String, default: 'Ceremony' } // e.g., Ceremony, Party, Task
});

module.exports = mongoose.model('Event', EventSchema);
