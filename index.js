const express = require('express')
const cors = require("cors")

const app = express()
app.use(cors())

const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/calculadora', (req, res) => {
    const op = req.query.operacao
    
    if(!op || isNaN(req.query.n1) || isNaN(req.query.n2)) {
        res.status(400).send('Bad request')
        return
    }

    const n1 = Number(req.query.n1)
    const n2 = Number(req.query.n2)
    let result

    if(!op || !n1 || !n2){
        res.status(400).send('Bad request')
        return
    }

    if(op === 'soma') {
        result = n1 + n2
    }

    else if(op === 'subtracao'){
        result = n1 - n2
    } 
    else if (op === 'multiplicacao'){
        result = n1 * n2
    }
    else if(op === 'divisao'){
        if(n2===0){
            res.status(400).json({ erro: 'Bad request' });
            return
        }
    }
    
    res.json({ resultado: result })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})