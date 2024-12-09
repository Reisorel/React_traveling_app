const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const sequelize = require("./config/db");
const defineAssociations = require("./models/associations");
const Reservations = require("./models/Reservations");



app.use(cors());

sequelize
  .authenticate()
  .then(async () => {
    console.log("Testing databases");

    // defineAssociations();

    // try {
    //   const reservation = await Reservations.findOne();
    //   if (room) {
    //     console.log("Table 'Reservations' loaded !");
    //   } else {
    //     console.log("Table 'Reservations' loaded but not data found.");
    //   }
    // } catch (error) {
    //   console.error("Error accessing 'Reservations' table :", error);
    // }

  })

const buildPath = path.join(__dirname, '../frontend/dist');  // Changez "dist" par "build" si nécessaire

// Utilise le dossier de build pour servir les fichiers statiques
app.use(express.static(buildPath));

// Route par défaut pour servir index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Backend server started on port ${PORT}`);
});
