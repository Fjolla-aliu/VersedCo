/* eslint-disable no-undef */
const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(cors());

const uri = "mongodb+srv://Fjolla:Veiddfl*@mycluster.k3k18zw.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to the database');
  })
  .catch((err) => {
    console.error(`Error connecting to the database. \n${err}`);
  });


//---------Cart---------------------------


const cartItemSchema = new mongoose.Schema({
  name: String,
  description: String,
  quantity: Number,
  price: Number,
});

const CartItem = mongoose.model('CartItem', cartItemSchema);

// Endpoint to get the cart items from the database
app.get('/api/cart', async (req, res) => {
  try {
    const cartItems = await CartItem.find();
    res.json(cartItems);
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving cart items' });
  }
});

// Endpoint to add an item to the cart and store it in the database
app.post('/api/cart', async (req, res) => {
  const newItem = req.body;
  try {
    const createdItem = await CartItem.create(newItem);
    res.status(201).json(createdItem);
  } catch (error) {
    res.status(500).json({ error: 'Error adding item to the cart' });
  }
});

app.put('/api/cart/update/:itemId', async (req, res) => {
  const itemId = req.params.itemId;
  const newQuantity = req.body.quantity;
  try {
    const updatedItem = await CartItem.findByIdAndUpdate(
      itemId,
      { quantity: newQuantity },
      { new: true }
    );
    res.json(updatedItem);
  } catch (error) {
    res.status(500).json({ error: 'Error updating item quantity' });
  }
});

app.delete('/api/cart/remove/:itemId', async (req, res) => {
  const itemId = req.params.itemId;
  try {
    const removedItem = await CartItem.findByIdAndRemove(itemId);
    if (!removedItem) {
      return res.status(404).json({ error: 'Item not found' });
    }
    res.json(removedItem);
  } catch (error) {
    res.status(500).json({ error: 'Error removing item from the cart' });
  }
});

app.delete('/api/cart/clear', async (req, res) => {
  try {
    await CartItem.deleteMany({});
    res.json({ message: 'Cart cleared successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error clearing the cart' });
  }
});



//--------------About page-----------------

const fullText = `
  Your full text goes here. It can be as long as you want.
  You can add more content and details to this text.
`;

app.get('/api/about', (req, res) => {
  res.json({ aboutText: fullText });
});

app.listen(8000, () => {
  console.log('Server started on port 8000');
});
