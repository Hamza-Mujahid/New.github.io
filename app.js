// Question 1
var itemsArray = [
{name:"juice",price:"50", quantity:"3"},
{name:"cookie",price:"30", quantity:"9"},
{name:"shirt",price:"880", quantity:"1"},
{name:"pen",price:"100", quantity:"2"}];
var priceOFJuice = itemsArray[0].price * itemsArray[0].quantity
var priceOFCookie = itemsArray[1].price * itemsArray[1].quantity
var priceOfShirt = itemsArray[2].price * itemsArray[2].quantity
var priceOfPen = itemsArray[3].price * itemsArray[3].quantity
var totalPriceOFAll = priceOFCookie + priceOFJuice + priceOfPen + priceOfShirt

console.log( "Shirt = " +  priceOfShirt , ", Cookie = " + priceOFCookie, ", pen = " +  priceOfPen, ", Juice = " + priceOFJuice)
console.log( "Total Price of All Itmes is " +  totalPriceOFAll)



//Question 2
var obj = {
    name:"Hamza",
    email:"sample@gmail.com",
    Password:123456,
    age :"21",
    Gender:"male",
    City:"Karachi",
    Country:"Pakistan",
}
var check = obj.City;
var check2 = obj.age;

console.log(check, check2)

//Question 3
function User(Name, age , Hobby , fvrtColor){
    this.fullname=Name,
    this,umar= age,
    this,mashgala= Hobby,
    this.color= fvrtColor
}

var user1 = new User("Hamza", 21, "Football", "orange");
var user2 = new User("Faiz" , 15, "Cricket", "Green");
var user3 = new User("Owais", 20, "Anime", "yellow" );

console.log(user1, user2, user3);

// Question 4
function User(Name, Gender, Address, Education, Profession){
    this.Name=Name,
    this.Address=Address,   
    this.Gender=Gender,     
    this.Education=Education
    this.Profession=Profession
}
var userName = document.getElementById("Name");
var userGender= document.getElementById("Gender");
var userAddress= document.getElementById("Address");
var userEducation= document.getElementById("Education");
var userProfession=document.getElementById("Profession");
var arr = [ ]
var myuser1 = new User(userName.value, userGender.value, userEducation.value, userAddress.value, userProfession.value );
arr.push(myuser1)
console.log(user1);
