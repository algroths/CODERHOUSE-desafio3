const express = require('express');
const app = express();
const contenedor = require('./Contenedor');

let cont1 = new contenedor.Contenedor('productos.txt');

let obj = [
    {
        title: "Producto1",
        price: 22,
        url: "http://www.Producto1.com"
    },
    {
        title: "Producto2",
        price: 22,
        url: "http://www.Producto2.com"
    },
    {
        title: "Producto3",
        price: 22,
        url: "http://www.Producto3.com"
    }
]

    ; (async () => {
        for (let i = 0; i < obj.length; i++) {
            await cont1.save(obj[i]);
        }
    })();



app.get('/productos', async (req, res) => {

    return res.send(await cont1.getAll());
})

app.get('/productoRandom', async (req, res) => {
    let id = Math.round(Math.random() * 2 + 1);
    return res.send(await cont1.getByid(id));
})

const PORT = 8080;

const server = app.listen(PORT, () => {
    console.log(`Servidor HTTP con Express corriendo en el puerto ${PORT}`)
});

server.on('error', error => console.log(`Error en servidor: ${error}`));