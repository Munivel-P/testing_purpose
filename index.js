// const express = require('express');
// const fetch = require('node-fetch');

// const app = express();
// const port = 3000;

// async function fetchData() {
//   try {
//     const response = await fetch('https://api.coinpaprika.com/v1/coins/btc-bitcoin');
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     throw error;
//   }
// }

// app.get('/', async (req, res) => {
//   try {
//     const data = await fetchData();
//     res.json(data);
//   } catch (error) {
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });




const express = require("express");
const fetch =require('node-fetch');

const app = express();
const port = 3000;

// app.get("/", function (req, res) {
//   res.send("Hello World!");

async function fetchData() {
  try {



    const response = await fetch('https://api.coinpaprika.com/v1/coins/btc-bitcoin');
;
    const data = await response.json();

    // Extract id and name fields
const { id, name, symbol,rank,is_new,is_active,type,logo,description,message,open_source,started_at,development_status,hardware_wallet,proof_type,org_structure,hash_algorithm,first_data_at,last_data_at} = data;

// Create a new object with only id and name fields
const newJsonObject = {  id, name, symbol,rank,is_new,is_active,type,logo,description,message,open_source,started_at,development_status,hardware_wallet,proof_type,org_structure,hash_algorithm,first_data_at,last_data_at};

    
    return newJsonObject;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

app.get('/', async (req, res) => {
  try {
    const data = await fetchData();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

);



app.get('/about',async(req,res)=>{
    console.log('working');
    res.send("nothing");
});

// });



app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});

