const express = require('express');


const app = express();
const PORT = 3000;

// data


//* Routes
app.get('/tip/:total/:tipPercentage', (req, res) => {
    res.send(` ${((req.params.total * req.params.tipPercentage) / 100)}`);
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});