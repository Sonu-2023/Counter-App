const constValue = document.querySelector('#counter');
const increment = ()=> {

    // get the value from ui
     let value = parseInt(constValue.innerText);
     //increment the value
    value = value+1;
    //set the value onto ui
    constValue.innerText = value;
}

const decrement = () => {
    //get the value for ui
    let value = parseInt(constValue.innerText);
     //decrement the value
    value = value-1;
    //set the value onto ui
    constValue.innerText = value;


}