const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');


const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",       // Your database host
    user: "root",            // Your MySQL username
    password: "Leo@125154",// Your MySQL password
    database: "flight_booking" // Your database name
});

db.connect(err => {
    if (err) throw err;
    console.log("MySQL Connected...");
});

// Sample Route
app.get('/', (req, res) => {
    res.send("Flight Booking API Running");
});

app.listen(5000, () => {
    console.log("Server started on port 5000");
});


