
const Redirect = () => {
 
    let page1 = document.getElementById("pages").value;
    console.log(page1);

    if(page1 == 'Instructions'){
        window.location.href= "instructions.html";
    }else if(page1 == 'SurveyForm'){
        window.location.href= "survey.html";
    }else if (page1 == 'HomePage'){
       window.location.href= "index.html";
    }
}






let form = document.getElementById("form");

let table = document.getElementById("table");

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    submit();
})

const submit = () => {
    let firstName = document.getElementById('first-name').value;
    let Lastname = document.getElementById('last-name').value;
    let Address = document.getElementById('address').value;
    let Pincode = document.getElementById('pincode').value;
    let State = document.getElementById('state').value;
    let Country = document.getElementById('country').value;


    //Gender Selection:
    let gen = document.getElementsByName("gender");
    
    for(var i=0; i<gen.length; i++){
        if(gen[i].checked){
            var resultgender = gen[i].value;
        }
    }


   //Food Choice Selection: 
    let checkbox = document.querySelectorAll('input[name="food"]:checked');
    let resultfood = [];

    checkbox.forEach((choice)=>{
        resultfood.push(choice.value);
    })


    const tableEle = document.getElementById('table');
        const trEle = document.createElement('tr');
        const tbodyEle = document.createElement('tbody');
        const FnameEle = document.createElement('td');
        const LnameEle = document.createElement('td');
        const AddressEle = document.createElement('td');
        const PincodeEle = document.createElement('td');
        const GenderEle = document.createElement('td');
        const FoodEle = document.createElement('td');
        const StateEle = document.createElement('td');
        const CountryEle = document.createElement('td');

        if(resultfood.length >= 2){
    
                FnameEle.innerHTML = firstName;
                LnameEle.innerHTML = Lastname;
                AddressEle.innerHTML = Address;
                PincodeEle.innerHTML = Pincode;
                GenderEle.innerHTML = resultgender;
                FoodEle.innerHTML = resultfood.join(",");
                StateEle.innerHTML = State;
                CountryEle.innerHTML = Country;
    
                trEle.appendChild(FnameEle);
                trEle.appendChild(LnameEle);
                trEle.appendChild(AddressEle);
                trEle.appendChild(PincodeEle);
                trEle.appendChild(GenderEle);
                trEle.appendChild(FoodEle);
                trEle.appendChild(StateEle);
                trEle.appendChild(CountryEle);
    
                tbodyEle.appendChild(trEle);
                tableEle.appendChild(tbodyEle);
    
        }else{
            alert("Please select minimum 2 Food choices");
        }
   
    form.reset();
    
}
