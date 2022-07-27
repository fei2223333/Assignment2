var express = require('express');
var router = express.Router();
var uuid = require('uuid');
const Recipe = require('../models/Recipe');

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
    Recipe.find({})
    .then((recipes)=>{
        res.send(JSON.stringify(recipes));
    })
    .catch((e)=>{

    })
});

router.post('/',function(req, res, next) {
    const result = req.body;
    const newRecipe = new Recipe(result);
    newRecipe.save()
    .then(()=>{
        console.log("save successfully");
        Recipe.find({})
        .then((recipes)=>{
            res.send(JSON.stringify(recipes));
        })
    })
    .catch((e)=>{
        console.log(e);
    })
    
})

router.put('/:id',function(req, res, next) {
    const result = req.body;
    const id = req.params.id;
    Recipe.findByIdAndUpdate(id,result)
    .then(()=>{
        Recipe.find({})
        .then((recipes)=>{
            res.send(JSON.stringify(recipes));
        })
    })
    .catch((e)=>{
        console.log(e);
    })
})

router.delete('/:id',function(req, res, next) {
    const id = req.params.id;
    Recipe.findByIdAndDelete(id)
    .then(()=>{
        Recipe.find({})
        .then((recipes)=>{
            res.send(JSON.stringify(recipes));
        })
    })
    .catch((e)=>{
        console.log(e);
    })
    
})

module.exports = router;