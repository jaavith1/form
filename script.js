let submit = document.getElementById("submit")
submit.addEventListener("click",(event)=>{
    event.preventDefault();
    let Address = [];
    Address.push(Address1.value)
    Address.push(Address2.value)

    let Gender = document.getElementsByName("Gender")
    let GenderValue;
    for(let i=0;i<Gender.length;i++){
        if(Gender[i].checked){
            GenderValue = Gender[i].value
        }
    }
    
    let food = document.getElementsByName("food")
    let foodList = []
    let foodCount = 0;
    console.log(food)
    for(let i=0;i<food.length;i++){
        if(food[i].checked){
            foodList.push(food[i].value)
            foodCount++
        }
    }
    if(foodList.length>=2){
        result = foodList.join(", ")
    }else{
        result = alert("Choose atleast 2 options out of 5 in food")
    }

    createTable(Firstname.value,Lastname.value,Address.join(" "),PIN.value,GenderValue,result,State.value,Country.value)
    Firstname.value = ""
    Lastname.value = ""
    Address1.value = ""
    Address2.value = ""
    PIN.value = ""
    Gender.value = ""
    foodList = [];
    State.value = ""
    Country.value = ""
})

let Firstname = document.getElementById("Firstname")
let Lastname = document.getElementById("Lastname")
let Address1 = document.getElementById("Address1")
let Address2 = document.getElementById("Address2")
let PIN = document.getElementById("PIN")
let Gender = document.getElementById("Gender")
let food = document.getElementById("food")
let State = document.getElementById("State")
let Country = document.getElementById("Country")


function createTable(Firstname,Lastname,Address,Pincode,Gender,food,State,Country){
    let tbody = document.getElementById("tbody")
    let tr = document.createElement("tr")
    let td1 = document.createElement("td")
    let td2 = document.createElement("td")
    let td3 = document.createElement("td")
    let td4 = document.createElement("td")
    let td5 = document.createElement("td")
    let td6 = document.createElement("td")
    let td7 = document.createElement("td")
    let td8 = document.createElement("td")
    td1.innerHTML = Firstname;
    td2.innerHTML = Lastname;
    td3.innerHTML = Address;
    td4.innerHTML = Pincode;
    td5.innerHTML = Gender;
    td6.innerHTML = food;
    td7.innerHTML = State;
    td8.innerHTML = Country;
    tr.append(td1)
    tr.append(td2)
    tr.append(td3)
    tr.append(td4)
    tr.append(td5)
    tr.append(td6)
    tr.append(td7)
    tr.append(td8)
    tbody.append(tr)
}