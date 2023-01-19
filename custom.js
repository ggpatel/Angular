var xyz = 10;
let abc = 11;
var $jksdfn = "Bharat";

$(document).ready(function(){
    xyz = "xyz";
    abc = "abc";

    console.log(xyz);
    console.log(abc);

    // $("#emails").click(function() {
    //     alert("Clicked");
    // });

    // $("#emails").keyup(function(){
    //     alertKeyup();
    // });

    // function alertKeyup(){
    //     alert("KeyUp");
    // }

    // $(".calender").click(function(){
    //     $("#dob").click();
    // });
    var a = getValue("Bharat", "Prajapati");
    var b = 20;
    console.log(a + b);

    a = 20;
    console.log(a + b);

    for(var x = 1;x<=10;x++){
        console.log(x);
    }

    callOnLoad();
});

function callOnLoad() {
    var names = ["Bharat", "Rahul", "Ajay"];
    var marks = [50, 30, 25];

    // alert(names[2] + " - " + marks[1]);

    var employee = {
        FirstName: "Bharat",
        LastName: "Prajapati",
        Grade: 5,
        Salary: 51000 
    }

    // alert(employee.FirstName + " " + employee.LastName);
    alert(employee.FirstName + " " + employee.LastName + ' - ' + employee.Salary);
}

function getValue(firstName, lastName){
    return firstName + " " + lastName;
}

function clickMe() {
    document.getElementById("demo").innerHTML = "Hello World!<br/>Hello";
    document.getElementById("demo").style = "font-size: 20px";
}
