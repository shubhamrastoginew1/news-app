const express = require("express");
const app = express();
const axios = require('axios');
const cors = require('cors');
app.use(cors());



const cat = [ 'india', 'politics', 'sports', 'science', 'crypto', 'health', 'education' ];
const APIKEY = "fb24ce9cdb6644d282b1fef7b82ecfa4";
const topHeadlines = async (catogory) => {
    return axios.get(`https://newsapi.org/v2/everything?q=${cat[ catogory ]}&apiKey=${APIKEY}`)
        .then((res) => {
            return (res).data.articles;
        })
        .catch((err) => {
            console.log(err);
        });
}

for (let i = 0; i <= 6; i++) {
    app.get(`/data/${i}`, (req, res) => {
        topHeadlines(i).then(data => {
            res.send(data);
        })
    })
}

app.listen(4000, () => {
    console.log("listning on port 5000");
})