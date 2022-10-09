function Validator() {
    
}

const validate = (input,element) => {
    !input
    ? (element.parentElement.style.borderColor = "red")
    : (element.parentElement.style.borderColor = "#7FFF00")
}

Validator.isRequired = (element,value) => {
        validate (value,element)
}

Validator.isEmail = (element,value) =>{
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    validate (regex.test(value),element)
}



export default Validator