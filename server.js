const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

const indexHTML = (()=> {
  return fs.readFileSync(path.resolve(__dirname, "./index.html"), "utf-8")
})();

require('./build/dev-server')(app);


const port = process.env.PORT || 3000;

app.use("/dist", express.static(path.resolve(__dirname, "./dist")))


app.get('*', (req,res)=> {
  res.send(indexHTML);
  res.end();
})

app.listen(port, ()=> {
  console.log(`server running at http://localhost:${port}`);
});
