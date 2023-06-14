import axios from 'axios'
import express from 'express'
const app = express();

const port = process.env.PORT || 3000;

app.get("/search", async (req, res) => {
  const { query } = req.query;
  console.log(query);
  try {
    const { data } = await axios(
      `https://api.coingecko.com/api/v3/search?query=${query}`
    );
    const coins = data.coins
      .filter(
        (el) =>
          el.id.startsWith(query) ||
          el.name.startsWith(query) ||
          el.symbol.startsWith(query)
      )
      .slice(0, 10);
    res.send(coins);
  } catch (err) {
    console.log(err);
  }
});

app.listen(port, () => console.log("live on 3000"));
