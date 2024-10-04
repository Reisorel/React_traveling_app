const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

app.use(cors());

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
  console.log(`Server is running at http://localhost:${PORT}`);  // Affiche l'URL complète ici
});
