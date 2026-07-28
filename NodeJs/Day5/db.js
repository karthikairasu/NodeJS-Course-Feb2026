var mysql = require("mysql2")

var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"mynodedata"
})

con.connect((err)=>{
    if(err) throw err;
    console.log("connected");
    var qry = "insert into register(name, pass, email, mobile) values('karthik', '123456', test@gmail.com', '9999999999')";
    con.query(qry, (err, res)=>{
        if(err) throw err;
        console.log("Record inserted"+ res);
    })

})

con.connect((err)=>{
    if(err) throw err;
    console.log("connected");
    var qry = "select * from users";
    con.query(qry, (err, res)=>{
        if(err) throw err;
        console.log("Record inserted"+ res);
    })

})


con.end();