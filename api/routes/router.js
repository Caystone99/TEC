const router = require('express').Router();


router.get('/', (req, res)=>{
    let trusted = [
        {id:1, "src":'img/irs-logo.png'},
        {id:2, "src":'img/upao.png'},
        /*{id:3, "src":'img/nysc.png'},*/
        {id:4, "src":'img/wes-logo.svg'},
        /*{id:5, "src":'img/unesco.svg'},
        {id:6, "src":'img/moe-nig.png'},*/
    ];
    res.render('index', {title:"Home", trusted})
})

router.use('*',(req, res)=>{
    res.status(404);
    res.render('404', {title:'Page not found'})
})

module.exports = router