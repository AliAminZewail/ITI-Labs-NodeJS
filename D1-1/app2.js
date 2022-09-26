const express = require('express');
const app = express();
var emps = [
    {
        Name:"Ahmed Ali",
        Age:30
    },
    {
        Name:"Ahmed Gamal",
        Age:32
    },
    {
        Name:"Ali",
        Age:33
    },
    {
        Name:"Samy",
        Age:20
    },
    {
        Name:"Asmaa",
        Age:25
    }
]
app.get("/",function(req,res){
    res.sendFile(__dirname + "/views/home.html")
});

app.get("/about",function(req,res){
    if(req.query.lang=="ar"){
        res.sendFile(__dirname+"/views/ar/about.html")
    }else{
        res.sendFile(__dirname + "/views/about.html")
    }
});


app.get("/newemployee",function(req,res){
    res.sendFile(__dirname+"/views/addemployee.html")
})

app.get("/searchemp",function(req,res){
    let matchingEmps = emps.filter(x=>x.Name.toLowerCase().indexOf(req.query.q.toLowerCase())>-1);
        
    if(matchingEmps.length>0){
        let data = matchingEmps.map(emp=>{
            return `<h1>${emp.Name} : ${emp.Age}</h1><br/>`
        })//

        data = data.join()
        res.send(data)
    }else{
        res.send('not found')
    }
})



app.listen(8080)