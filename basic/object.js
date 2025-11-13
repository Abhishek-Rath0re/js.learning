const JsUser={
    name:"Abhishek",
    age: 18,
    location:"jaipur",
    email: "abhishek@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}// ****This is the one way to create a object******
// console.log(JsUser.email)
// console.log(JsUser["email"])
// // const mySum=Symbol(key1)
// // [mySym]:"myKey1",
// // console.log(JsUser[mySym])
// JsUser.email="Abhi@chatgpt.com"//this is the method of updating any object value
// //Object.freeze(JsUser)//This is to use freeze the change in object
// //******Function**** */
// JsUser.greeting=function()
// {
//     console.log("Hello Js User");

// }
// console.log(JsUser.greeting());
// JsUser.greeting2=function(){
//     console.log(`Hello JsUser, ${this.name}`)//This is string interpolation and this is use to call the value from object

// } 
// console.log(JsUser.greeting2())
const tinderUser2={
    tinderUser:id="123abc",
    tinderUser:UserName="Samy",
    tinderUsera:isLoggedIn=false
}
//console.log(tinderUser2)
const regularUser={
    email:"some@gmail.com",
    fullName:{
        userFullName:{
            firstname:'abhi',
            lastname:'Rana'
        }
    }
}//That is nesting of obeject 
//console.log(regularUser.fullName);
//****Merging of Object */
const obj1={1:"A",2:"B"}
const obj2={3:"A",4:"B"}
const obj3=Object.assign(obj1,obj2)//.assign(target,source)
//console.log(obj3)
const obj4={...obj1,...obj2}//It also work as same assign work
//console.log(obj4)
// console.log(Object.keys(JsUser))
// console.log(Object.values(JsUser))
// console.log(Object.entries(JsUser));
console.log(JsUser.hasOwnProperty('isLoggedIn'))//use for searching in objects
