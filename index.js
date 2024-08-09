const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors()); // Adiciona o middleware CORS
app.use(express.json());

// Dados simulados para slots
const slots = {
  'slot1': {
    name: "Mega Moolah",
    maxWin: "1,000,000",
    rtp: "88%",
    provider: "Microgaming"
  },
  'slot2': {
    name: "Starburst",
    maxWin: "500,000",
    rtp: "96%",
    provider: "NetEnt"
  },
  'slot3': {
    name: "Gonzo's Quest",
    maxWin: "2,500,000",
    rtp: "95%",
    provider: "NetEnt"
  }
};

app.get('/slot-info', (req, res) => {
  const slotId = req.query.slot; // Obtém o parâmetro de consulta 'slot'
  const slotInfo = slots[slotId] || slots['slot1']; // Retorna a slot correspondente ou a default 'slot1'
  res.json(slotInfo);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
