function Validator() {
    
}

const validate = (e,value) => {
    !value
    ? (e.target.parentElement.style.borderColor = "red")
    : (e.target.parentElement.style.borderColor = "#7FFF00")
}

Validator.isRequired = (e) => {
        validate (e,e.target.value)
}

Validator.isEmail = (e) =>{
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    validate (e,regex.test(e.target.value))
}

export default Validator