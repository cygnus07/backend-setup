import express from "express"
const app=express()

const port=process.env.PORT || 4000


app.get('/', (req,res) => {
    console.log("hey");
    res.send("Liverpool Fc")
})

app.listen(port, () => {
    console.log(`app is running on port ${port}`);
})












