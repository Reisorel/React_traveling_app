const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");

const sequelize = require("./config/db");
const defineAssociations = require("./models/associations");
const routes = require("./routes/routes.js");
const Reservations = require("./models/Reservations");
const Travels = require("./models/Travels");
const Users = require("./models/Users");
const port = 3000;

app.use(cors());
app.use(bodyParser.json()); // Pour parser le corps de la requête en JSON
app.use("/api", routes);

// Vérifier le chargement de la DB
sequelize.authenticate().then(async () => {
  console.log("Checking tables");

  try {
    const reservation = await Reservations.findOne();
    if (reservation) {
      console.log("Table 'Reservations' loaded !");
    } else {
      console.log("Table 'Reservations' loaded but not data found.");
    }
  } catch (error) {
    console.error("Error accessing 'Reservations' table :", error);
  }

  try {
    const user = await Users.findOne();
    if (user) {
      console.log("Table 'Users' loaded !");
    } else {
      console.log("Table 'Users' loaded but not data found.");
    }
  } catch (error) {
    console.error("Error accessing 'Users' table :", error);
  }

  try {
    const travel = await Travels.findOne();
    if (travel) {
      console.log("Table 'Travels' loaded !");
    } else {
      console.log("Table 'Travels' loaded but not data found.");
    }
  } catch (error) {
    console.error("Error accessing 'Travels' table :", error);
  }

  console.log("Checking associations");
  try {
    defineAssociations();
    console.log("Associations defined successfully!");
  } catch (error) {
    console.error("Error defining associations:", error.message);
  }
});

const buildPath = path.join(__dirname, "../frontend/dist");

// Utilise le dossier de build pour servir les fichiers statiques
app.use(express.static(buildPath));

// Route par défaut pour servir index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(buildPath, "index.html"));
});

app.get("*", (req, res) => {
  res.sendFile(path.join(buildPath, "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
