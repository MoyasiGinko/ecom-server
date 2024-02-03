const express = require('express');
const bodyParser = require('body-parser');
const path = require('path'); // Add this line

const app = express();
const cors = require('cors');

app.use(cors({ origin: (origin, callback) => callback(null, true) }));
app.use(bodyParser.json());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));
const port = 3001;

// Sample data
let users = [
  {
    id: 1,
    email: 'test@gmail.com',
    password: '123456',
    type: 'CUSTOMER',
    token: 'sample_token_1',
  },
  {
    id: 2,
    username: 'test',
    email: 'test23@gmail.com',
    password: '123456',
    type: 'VENDOR',
    token: 'sample_token_2',
  },
  {
    id: 3,
    username: 'admin',
    email: 'admin@gmail.com',
    password: '123456',
    type: 'ADMIN',
    token: 'sample_token_2',
  },
];

let productCategories = [
  { id: 1, name: 'Men' },
  { id: 2, name: 'Women' },
];

let products = [
  {
    id: 1,
    name: 'test',
    details: 'its leather',
    brand: 'dior',
    price: 1000.0,
    category: { id: 1, name: 'Men' },
    imageURL:
      'https://media.allure.com/photos/655b7fc12b7a01b4af8cd993/master/pass/_best_hair_oil_003.jpg',
    vendorId: 2,
    quantity: 8.0,
  },
  {
    id: 2,
    name: 'genji',
    details: 'its leather',
    brand: 'channel',
    price: 1000.0,
    category: { id: 2, name: 'Women' },
    imageURL:
      'https://static01.nyt.com/images/2023/07/13/dining/13food-aspartame2/13food-aspartame2-superJumbo.jpg',
    vendorId: 2,
    quantity: 4.0,
  },
];

let inventory = [
  {
    id: 1,
    vendorId: 2,
    vendorEmail: 'test1@gmail.com',
    productId: 1,
    quantity: 5,
    productName: 'pajama',
  },
  {
    id: 2,
    vendorId: 2,
    vendorEmail: 'test1@gmail.com',
    productId: 2,
    quantity: 40,
    productName: 'genji',
  },
];


let userRecommendations = [
  { userId: 1, categories: ['Men', 'Women'] },
  { userId: 2, categories: ['Women', 'Casual'] },
  { userId: 3, categories: ['Men', 'Formal'] },
  // Add more user recommendation entries as needed
];

// User Recommendation Routes
app.get('/api/v1/analytic/suggestion/user/:userId', (req, res) => {
  const userId = parseInt(req.params.userId);
  const userRecommendation = userRecommendations.find(
    (rec) => rec.userId === userId
  );

  if (userRecommendation) {
    const { categories } = userRecommendation;
    res.json({ categories });
  } else {
    res.status(404).json({ message: 'User recommendation not found' });
  }
});

// Auth Routes
app.post('/api/v1/auth/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find((u) => u.email === email && u.password === password);
  if (user) {
    res.json(user);
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

app.post('/api/v1/auth/register', (req, res) => {
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  res.json(newUser);
});

// Product Routes
// Get all products
app.get('/api/v1/product', (req, res) => {
  res.json(products);
});

// Get product by ID
app.get('/api/v1/product/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find((p) => p.id === productId);

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

// Add products
app.post('/api/v1/product', (req, res) => {
  const newProduct = req.body;
  newProduct[0].id = products.length + 1;
  products.push(newProduct[0]);
  res.json(newProduct); // Return the added product as a single object
});


/// Update or create product
app.put('/api/v1/product/:productId', (req, res) => {
  const productId = parseInt(req.params.productId);
  const { name, details, brand, price, category, imageURL, quantity } =
    req.body;

  // Check if the product with the given productId exists
  const existingProductIndex = products.findIndex((p) => p.id === productId);

  if (existingProductIndex !== -1) {
    // Product exists, update it
    const existingProduct = products[existingProductIndex];

    existingProduct.name = name || existingProduct.name;
    existingProduct.details = details || existingProduct.details;
    existingProduct.brand = brand || existingProduct.brand;
    existingProduct.price = price || existingProduct.price;
    existingProduct.category = category || existingProduct.category;
    existingProduct.imageURL = imageURL || existingProduct.imageURL;
    existingProduct.quantity = quantity || existingProduct.quantity; // Update quantity

    res.json(existingProduct);
  } else {
    // Product doesn't exist, create a new one
    const newProduct = {
      id: productId, // Assuming you want to keep the provided productId
      name: name,
      details: details,
      brand: brand,
      price: price,
      category: category,
      imageURL: imageURL,
      vendorId: 2, // Replace with the actual vendorId
      quantity: quantity || 0, // Set an initial quantity, or adjust as needed
    };

    products.push(newProduct);
    res.json(newProduct);
  }
});

// Product Category Routes

// 1. Create Product Category
app.post('/api/v1/product-category', (req, res) => {
  const categoriesToAdd = req.body;

  // Assuming you have a function to generate unique category IDs
  const addedCategories = categoriesToAdd.map((category) => {
    const categoryId = generateCategoryId();
    const newCategory = {
      id: categoryId,
      name: category.name,
    };
    productCategories.push(newCategory);
    return newCategory;
  });

  res.json(addedCategories);
});

// Function to generate a unique category ID
function generateCategoryId() {
  return productCategories.length + 1;
}


// 2. Get All Product Categories List
app.get('/api/v1/product-category', (req, res) => {
  res.json(productCategories);
});

// 3. Get Product Category by ID
app.get('/api/v1/product-category/:categoryId', (req, res) => {
  const categoryId = parseInt(req.params.categoryId);
  const category = productCategories.find((c) => c.id === categoryId);

  if (category) {
    res.json(category);
  } else {
    res.status(404).json({ message: 'Product Category not found' });
  }
});

// 4. Update Product Category
app.patch('/api/v1/product-category/:categoryId', (req, res) => {
  const categoryId = parseInt(req.params.categoryId);
  const { name } = req.body;

  const category = productCategories.find((c) => c.id === categoryId);

  if (category) {
    category.name = name || category.name;

    const updatedCategory = {
      id: category.id,
      name: category.name,
    };

    res.json(updatedCategory);
  } else {
    res.status(404).json({ message: 'Product Category not found' });
  }
});

// 5. Delete Product Category
app.delete('/api/v1/product-category/:categoryId', (req, res) => {
  const categoryId = parseInt(req.params.categoryId);
  const index = productCategories.findIndex((c) => c.id === categoryId);

  if (index !== -1) {
    productCategories.splice(index, 1);
    res.json({ message: 'Product Category Deleted Successfully' });
  } else {
    res.status(404).json({ message: 'Product Category not found' });
  }
});

// Add this endpoint after the existing endpoints
// Delete product by productId
app.delete('/api/v1/product/:productId', (req, res) => {
  const productId = parseInt(req.params.productId);
  const index = products.findIndex((p) => p.id === productId);

  if (index !== -1) {
    products.splice(index, 1);
    res.json({ message: 'Product Deleted Successfully' });
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

// Add this endpoint after the existing endpoints
// Get all products added by a vendor
app.get('/api/v1/product/vendor/:vendorId', (req, res) => {
  const vendorId = parseInt(req.params.vendorId);
  const vendorProducts = products.filter((p) => p.vendorId === vendorId);

  res.json(vendorProducts);
});


// Inventory Routes

// 1. Create Inventory
app.post('/api/v1/inventory', (req, res) => {
  const { productId, productName, quantity } = req.body;

  // Assuming you have a function to generate a unique inventory ID
  const inventoryId = generateInventoryId();

  const newInventoryItem = {
    id: inventoryId,
    vendorId: 2, // Assuming a static vendorId for now
    vendorEmail: 'test1@gmail.com', // Assuming a static vendorEmail for now
    productId: productId,
    quantity: quantity,
    productName: productName,
  };

  inventory.push(newInventoryItem);

  res.json(newInventoryItem);
});

// 2. Get All Inventory List
app.get('/api/v1/inventory', (req, res) => {
  const inventoryList = inventory.map((item) => ({
    id: item.id,
    vendorId: item.vendorId,
    vendorEmail: item.vendorEmail,
    productId: item.productId,
    quantity: item.quantity,
    productName: item.productName,
  }));

  res.json(inventoryList);
});

// 3. Get By Id Inventory
app.get('/api/v1/inventory/:inventoryId', (req, res) => {
  const inventoryId = parseInt(req.params.inventoryId);
  const inventoryItem = inventory.find((item) => item.id === inventoryId);

  if (inventoryItem) {
    const formattedInventoryItem = {
      id: inventoryItem.id,
      vendorId: inventoryItem.vendorId,
      vendorEmail: inventoryItem.vendorEmail,
      productId: inventoryItem.productId,
      quantity: inventoryItem.quantity,
      productName: inventoryItem.productName,
    };
    res.json(formattedInventoryItem);
  } else {
    res.status(404).json({ message: 'Inventory item not found' });
  }
});

// 4. Update Inventory
app.put('/api/v1/inventory/:inventoryId', (req, res) => {
  const inventoryId = parseInt(req.params.inventoryId);
  const { productName, quantity } = req.body;

  const inventoryItem = inventory.find((item) => item.id === inventoryId);

  if (inventoryItem) {
    inventoryItem.productName = productName || inventoryItem.productName;
    inventoryItem.quantity = quantity || inventoryItem.quantity;

    const updatedInventoryItem = {
      id: inventoryItem.id,
      vendorId: inventoryItem.vendorId,
      vendorEmail: inventoryItem.vendorEmail,
      productId: inventoryItem.productId,
      quantity: inventoryItem.quantity,
      productName: inventoryItem.productName,
    };

    res.json(updatedInventoryItem);
  } else {
    res.status(404).json({ message: 'Inventory item not found' });
  }
});

// 5. Delete Inventory
app.delete('/api/v1/inventory/:inventoryId', (req, res) => {
  const inventoryId = parseInt(req.params.inventoryId);
  const index = inventory.findIndex((item) => item.id === inventoryId);

  if (index !== -1) {
    inventory.splice(index, 1);
    res.json({ message: 'Inventory Deleted Successfully' });
  } else {
    res.status(404).json({ message: 'Inventory item not found' });
  }
});
// ... (existing code for other routes)

// Helper function to generate a unique inventory ID (you may use a more robust method)
function generateInventoryId() {
  return Math.floor(Math.random() * 1000) + 1;
}

// Add your order creation route here
let orders = [];

app.post('/api/v1/order', (req, res) => {
  const { totalPrice, productList } = req.body;

  // Assuming you have a function to generate a unique order ID
  const orderId = generateOrderId();
  const orderDate = new Date().toISOString().split('T')[0]; // Get the current date in "YYYY-MM-DD" format

  const order = {
    id: orderId,
    orderDate: orderDate,
    status: 'ORDERED',
    customerId: 2, // You may need to get the customer ID from the authenticated user
    paymentId: null,
    totalPrice: totalPrice,
    productList: productList,
    orderDetails: createOrderDetails(productList),
  };

  orders.push(order);

  res.json(order);
});

// Helper function to create order details from the product list
function createOrderDetails(productList) {
  return productList.map((product) => ({
    id: generateOrderId(), // Assuming you have a function to generate a unique detail ID
    productId: product.productId,
    quantity: product.quantity,
    price: product.price,
    name: product.name,
    categoryId: product.categoryId,
    categoryName: product.categoryName,
  }));
}

// Helper function to generate a unique order or detail ID (you may use a more robust method)
function generateOrderId() {
  return Math.floor(Math.random() * 1000) + 1;
}

// Order Routes
app.get('/api/v1/orders', (req, res) => {
  res.json(orders);
});

app.get('/api/v1/orders/:orderId', (req, res) => {
  const orderId = parseInt(req.params.orderId);
  const order = orders.find((o) => o.id === orderId);

  if (order) {
    res.json(order);
  } else {
    res.status(404).json({ message: 'Order not found' });
  }
});

// Payment Routes
let payments = [];

app.get('/api/v1/payments', (req, res) => {
  res.json(payments);
});

app.post('/api/v1/payment', (req, res) => {
  const { paymentType, amount, accountName, password, orderId } = req.body;

  // Assuming you have a function to generate a unique payment ID
  const paymentId = generatePaymentId();
  const date = new Date().toISOString().split('T')[0]; // Get the current date in "YYYY-MM-DD" format

  const payment = {
    id: paymentId,
    paymentType: paymentType,
    amount: amount,
    accountName: accountName,
    date: date,
    transactionId: generateTransactionId(),
    orderId: orderId,
    customerId: 2, // You may need to get the customer ID from the authenticated user
    password: password,
    userName: 'test@gmail.com', // You may need to get the user name from the authenticated user
  };

  payments.push(payment);

  res.json(payment);
});

// Helper function to generate a unique payment ID (you may use a more robust method)
function generatePaymentId() {
  return Math.floor(Math.random() * 1000) + 1;
}

// Helper function to generate a unique transaction ID (you may use a more robust method)
function generateTransactionId() {
  return Math.random().toString(36).substring(2, 15);
}

const PORT = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
