const fs = require('fs');
const csv = require('csv-parser');
const {writeToPath} =require('fast-csv');

const employees = [];

fs.createReadStream('C:/Users/Karthikairasu/users.csv')
    .pipe(csv())
    .on('data', row=>employees.push(row))
    .on('end', ()=> console.log(employees));

const data =[
  {id: '1',name: 'Karthi',age: '31',department: 'IT',salary: '70000'},
  {id: '2',name: 'user1',age: '31',department: 'IT',salary: '70000'},
  {id: '3',name: 'user2',age: '31',department: 'IT',salary: '70000'},
  {id: '4',name: 'user3',age: '31',department: 'IT',salary: '70000'},
]

writeToPath('C:/Users/Karthikairasu/empolyees.csv', data, {headers:true})
.on('error', err=>console.log(err))
.on('finish', ()=>console.log('Write to CSV successfully'));

const newEmployess = "\n5, praveen, 32, Sales, 65000";
fs.appendFile('C:/Users/Karthikairasu/empolyees.csv', newEmployess, err=>{
    if(err) console.log(err);
    else console.log('New empolyee added successfully');
})