const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
// CORS allows your Flutter app (on a different IP) to talk to this server
app.use(cors());
app.use(express.json());

// --- DATABASE CONNECTION ---
// Uncomment this block when you have your MONGO_URI ready in .env
/*
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.log('❌ DB Error:', err));
*/

// --- ROUTES ---

// 1. Test Route
app.get('/', (req, res) => {
  res.send('Rosette Event Backend is Running!');
});

// 2. Get All Events (Currently returning fake data for testing)
app.get('/api/events', async (req, res) => {
  // Once DB is connected, use: const events = await Event.find();
  
  const fakeEvents = [
    {
      id: '1',
      title: 'Sangeet Night',
      date: '2024-12-12',
      time: '7:00 PM',
      location: 'Grand Ballroom',
      type: 'Party'
    },
    {
      id: '2',
      title: 'Wedding Ceremony',
      date: '2024-12-14',
      time: '10:00 AM',
      location: 'Rose Garden',
      type: 'Ceremony'
    }
  ];
  
  res.json(fakeEvents);
});

// 3. Create Event (Stub)
app.post('/api/events', async (req, res) => {
  console.log('Received new event:', req.body);
  // const newEvent = new Event(req.body);
  // await newEvent.save();
  res.status(201).json({ message: 'Event received (not saved yet)', event: req.body });
});

// --- START SERVER ---
// "0.0.0.0" is crucial! It lets the server accept connections from other computers on WiFi.
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server running on port ${PORT}`);
});