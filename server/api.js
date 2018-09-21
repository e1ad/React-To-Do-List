module.exports = function (route) {


    var data = [];

    for(var i=0;i<100;i++){
        data.push({
            name:"elad"+i,
            age:i,
            country:"country"+i
        })
    }
    
    route.get('/api/test',(req, res)=>{
        res.send(JSON.stringify(data))
    })
    
      
    
}