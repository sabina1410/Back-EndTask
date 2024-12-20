// const express = require('express');
// const app = express();

// app.get('/card', function (req, res) {
//   res.send('Bu route kartlar üçün cavabdehdir');
// });
// app.get('/client', function (req, res) {
//   res.send('Bu marşrut müştərilər üçün cavabdehdir');
// });
// app.get('/', function (req, res) {
//     res.send('Hello World!');
//   });
// app.listen(3000, function () {
//   console.log('Example app listening on port 3000!');
// });



// const express = require('express');
// const app = express();

// const card=[
//   {
//     id:1,
//     number:"4647 5858 4747 8077"

//   },
//   {
//     id:2,
//     number:"4647 5858 4747 8077"

//   },
//   {
//     id:3,
//     number:"11 5858 4747 8077"

//   },
//   {
//     id:4,
//     number:"7647 2858 8947 5077"

//   },
//   {
//     id:5,
//     number:"4643 5856 4567 0077"

//   },
// ]
// app.get('/user/:id', function (req, res) {
//   res.send(JSON.stringify(card.find((user) => user.id == parseInt(req.params.id))));
// });
// app.listen(3000, function () {
//   console.log('Example app listening on port 3000!');
// });



// const express = require('express');
// const app = express();

// const card = [
//   { id: 1, number: "4647 5858 4747 8077" },
//   { id: 2, number: "4647 5858 4747 8077" },
//   { id: 3, number: "11 5858 4747 8077" },
//   { id: 4, number: "7647 2858 8947 5077" },
//   { id: 5, number: "4643 5856 4567 0077" },
// ];


// app.get('/card', function (req, res) {
//   res.json(card);
// });

// app.get('/user/:id', function (req, res) {
//   const requestedCard = card.find((c) => c.id === parseInt(req.params.id));

//   if (requestedCard) {
//     res.json(requestedCard);
//   } else {
//     res.status(404).send({ error: "Kart tapılmadı" });
//   }
// });


// app.listen(3000, function () {
//   console.log('Server 3000 portunda işləyir...');
// });




// const express = require('express');
// const app = express();

// app.use(express.json()); 


// const card = [
//   { id: 1, number: "4647 5858 4747 8077" },
//   { id: 2, number: "4647 5858 4747 8077" },
//   { id: 3, number: "11 5858 4747 8077" },
//   { id: 4, number: "7647 2858 8947 5077" },
//   { id: 5, number: "4643 5856 4567 0077" },
// ];

// const phonebook = [];


// app.get('/card', (req, res) => res.json(card));


// app.get('/card/:id', (req, res) => {
//   const result = card.find(c => c.id == req.params.id);
//   result ? res.json(result) : res.status(404).send({ error: "Kart tapılmadı" });
// });

// app.post('/phonebook', (req, res) => {
//   const { name, phone } = req.body;
//   if (!name || !phone) return res.status(400).send({ error: "Name və phone tələb olunur" });

//   const entry = { id: phonebook.length + 1, name, phone };
//   phonebook.push(entry);
//   res.status(201).json(entry);
// });


// app.get('/phonebook', (req, res) => res.json(phonebook));


// app.listen(3000, () => console.log('Server 3000 portunda işləyir...'));

const express = require("express");
const fs = require("fs");
const app = express();


const employeesFile = "./employees.json";


const defaultEmployees = [
    { id: 1, name: "Emin Hüseynov", position: "Developer", salary: 3000 },
    { id: 2, name: "Gülər Əliyeva", position: "Designer", salary: 2500 },
    { id: 3, name: "Rəşad Məmmədov", position: "Manager", salary: 4000 }
];


if (!fs.existsSync(employeesFile)) {
    fs.writeFileSync(employeesFile, JSON.stringify(defaultEmployees, null, 2));
}


app.get("/employees", (req, res) => {
    fs.readFile(employeesFile, "utf8", (err, data) => {
        if (err) {
            return res.status(500).send("Server xətası: JSON faylı oxuna bilmir.");
        }
        const employees = JSON.parse(data);
        res.json(employees);
    });
});


app.get("/employees/:id", (req, res) => {
    fs.readFile(employeesFile, "utf8", (err, data) => {
        if (err) {
            return res.status(500).send("Server xətası: JSON faylı oxuna bilmir.");
        }
        const employees = JSON.parse(data);
        const employee = employees.find(emp => emp.id === parseInt(req.params.id));
        if (employee) {
            res.json(employee);
        } else {
            res.status(404).send("İşçi tapılmadı.");
        }
    });
});


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server http://localhost:${PORT} ünvanında işləyir`);
});
