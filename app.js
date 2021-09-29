const cow = require("./pgDB")
const express = require('express')
const app = express();
const birds = require("./birds")


app.use(express.urlencoded({extended: false}))
app.use(express.json())

// express routing
app.use("/birds", birds)

app.get("/", async (req, res) => {
    res.send(`<form action="http://localhost:8080/" method="POST">
    //     <div>
    //       <label for="say">What greeting do you want to say?</label>
    //       <input name="say" id="say" value="Hi">
    //     </div>
    //     <div>
    //       <label for="to">Who do you want to say it to?</label>
    //       <input name="to" id="to" value="Mom">
    //     </div>
    //     <div>
    //       <button>Send my greetings</button>
    //     </div>
    //   </form>`)
})

app.post("/", (req, res) => {
    console.log(req.body)
    res.send(req.body)
})



app.listen(8080)
