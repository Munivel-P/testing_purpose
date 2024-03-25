const express = require("express");
const fetch = require('node-fetch');

const app = express();
const port = 3000;

async function fetchData(coinId) {
  try {
    const response = await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`);
    const data = await response.json();

    // Extract necessary fields from the data object
    const { id, name, symbol, rank, is_new, is_active, type, logo, description, message, open_source, started_at, development_status, hardware_wallet, proof_type, org_structure, hash_algorithm, first_data_at, last_data_at } = data;

    // Create a new object with the extracted fields
    const newJsonObject = { id, name, symbol, rank, is_new, is_active, type, logo, description, message, open_source, started_at, development_status, hardware_wallet, proof_type, org_structure, hash_algorithm, first_data_at, last_data_at };

    return newJsonObject;
  } catch (error) {
    console.error('Error fetching data:', error.message);
    throw new Error('Failed to fetch data from the API');
  }
}

app.get('api/:id', async (req, res) => {
  try {
    const coinId = req.params.id;
    const data = await fetchData(coinId);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/about', async (req, res) => {
  console.log('Endpoint: /about');
  res.send("About page content goes here");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
