const router = require('express').Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');

const generateToken = (id) => jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1d' });

router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  const userExists = await User.findOne({ username });
  if (userExists) return res.status(400).json({ message: 'User already exists' });

  try {
    const user = await User.create({ username, password, role: 'admin' });
    res.status(201).json({ _id: user._id, username: user.username, token: generateToken(user._id) });
  } catch (error) {
    res.status(400).json({ message: 'Invalid user data' });
  }
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });

  if (user && (await user.matchPassword(password))) {
    res.json({ _id: user._id, username: user.username, token: generateToken(user._id) });
  } else {
    res.status(401).json({ message: 'Invalid username or password' });
  }
});

module.exports = router;