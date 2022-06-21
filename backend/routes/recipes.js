var express = require('express');
var router = express.Router();
var uuid = require('uuid');

let recipes = [
    {
        id: uuid.v4().substring(0,8),
        title:"rice",
        ingredient:"rice",
        instruction:"rice",
    },
]


/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(JSON.stringify(recipes));
});

router.post('/',function(req, res, next) {
    const result = req.body;
    const newRecipe = {
        ...result,
        id:uuid.v4().substring(0,8),
    }
    recipes.push(newRecipe);
    res.send(JSON.stringify(recipes));
})

router.put('/:id',function(req, res, next) {
    const result = req.body;
    const id = req.params.id;
    for(let i=0; i<recipes.length;i++){
        if(recipes[i].id == id){
            recipes[i] = {
                ...result,
                id:uuid.v4().substring(0,8),
            }
            break;
        }
    }
    res.send(JSON.stringify(recipes));
})

router.delete('/:id',function(req, res, next) {
    const id = req.params.id;
    recipes = recipes.filter((r)=>{
        return r.id!=id;
    })
    res.send(JSON.stringify(recipes));
})

module.exports = router;