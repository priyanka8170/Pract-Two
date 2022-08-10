const express = require("express");
const app = express();
app.use(express.json());


app.get('/addTwoNumbers', (req,res) {​

    var num1 = req.query.num1;​
    
    var num2 = req.query.num2; ​
    
    var result = addNumbers(num1, num2);​
    
    Res.json({statusCode: 200, data: result, message:'Success'})​
    
    }) 


const addNumbers = (num1, num2) => {​

        var number1 = parseInt(num1)​
        
        var number2 = parseInt(num2)​
        
        var result = number1 + number2;​
        
        return result; ​
        
        }​

const Class = [
    { id:1, Sname: "khusleen"},
    { id:2, Sname: "het"},
    { id:3, Sname: "priyanka"},
]

app.get("/", (req,res) =>{
res.send("class enroll,ent list of students.");
});

app.get("/enroll", (req,res) => {
    res.send(Class);
    });

    app.get("/enroll/:id", (req,res) => {
        const Student = Class.find(c => c.id === parseInt(req.params.id));
        if (!Student) res.status(404).send("The given id not found");
        res.send(Student);
        });

app.post("/enroll", (req,res) => {
    const Student = {
        id: Class.length + 1,
        Sname: req.body.Sname
    };
Class.push(Student);
res.send(Student);
});


app.delete("/enroll/:id", (req,res) => {
    const Student = Class.find(c => c.id === parseInt(req.params.id));
    if (!Student) res.status(404).send("The given id not found");
    
    const index = Class.indexOf(Student);
    Class.splice(index,1);
    res.send(Student);
    });

const port = 3000; 
app.listen(port, () => { 
    console.log("App is now listening to:" +port);
});