var obj = {};
var mass = ['name', 'John', 'lastname', 'Black', 'age', '23'];
for(var i=0;i< mass.length; i+=2){
    obj[mass[i]] = mass[i+1]
}
console.log(obj)