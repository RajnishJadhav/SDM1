var express=require('express');
var app=express();

app.use(express.static('public'))



app.get('/', (req, res) => {
    res.sendFile("index.html")
})
  
app.listen(8000, () => {
    console.log(`Example app listening on port 8000`)
})
