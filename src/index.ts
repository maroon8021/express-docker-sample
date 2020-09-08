import * as express from "express"
import * as pg from "pg"

const app = express()
const port = 3000

app.get("/", (req, res) => res.send("Hello World!"))

app.get("/getSample", (req, res) => {
  // const pool = new pg.Pool({
  //   database: "sample",
  //   user: "root",
  //   password: "root",
  //   host: process.env.HOST,
  //   port: 55000,
  // })
  const pool = new pg.Pool({
    connectionString: "postgresql://root:root@127.0.0.1:55000/sample",
  })
  console.log(pool)

  pool.connect((err, client) => {
    if (err) {
      console.log(err)
    }
    client.query("SELECT * FROM sample", (error, result) => {
      res.send(JSON.stringify(result))
    })
  })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
