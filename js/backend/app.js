const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors(({ origin: '*' })));
app.use(express.json());
app.use(express.static('public'));