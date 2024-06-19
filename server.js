const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const messageRoutes = require('./routes/messageRoutes');
const commentRoutes = require('./routes/commentRoutes');

const app = express();
const port = 3000;

const dbURI = 'mongodb+srv://sahartest:12345AA@cluster-test.zlazcr9.mongodb.net/userAuth?retryWrites=true&w=majority';

mongoose.connect(dbURI)
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log('Error connecting to MongoDB:', err));

app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', messageRoutes);
app.use('/', commentRoutes);

app.get('/', (req, res) => {
  res.render('pages/index');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});