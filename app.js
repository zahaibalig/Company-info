import express, { urlencoded } from "express";

const app = express();

// urlencodedl =  https://autosys-kjoretoy-api.atlas.vegvesen.no/api-ui/index-enkeltoppslag.html?appid=fea6488c-bf34-4326-8b83-d1cb5e25d810

app.get("/", (req, res) => { 
    res.send("Hello World");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});