let myDate=new Date()
//console.log(myDate.toString())
let myCreatedDate=new Date(2023,0,23)
console.log (myCreatedDate.toDateString(new Date))
console.log(myCreatedDate.toLocaleDateString(new Date))
let myTimeStamp=Date.now()
console.log(myTimeStamp)
console.log(myCreatedDate.getTime())
let check=function(){
    if(
    myCreatedDate.getTime==myTimeStamp)
    console.log(true)
    else(
        console.log(false)
    )
}

