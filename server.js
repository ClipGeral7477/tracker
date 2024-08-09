const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Servir arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint para obter informações da slot
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
  const slotId = req.query.slot;
  const slotInfo = slots[slotId] || slots['slot1'];
  res.json(slotInfo);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
