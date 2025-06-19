const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('🎉 Hello from the CI/CD enabled backend!');
});

app.listen(port, () => {
  console.log(`🚀 Server is running on port ${port}`);
});
