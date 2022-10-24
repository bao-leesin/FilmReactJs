const initState = { 
    exist: false,
    status: 'beforeLogin'
}


const loginReducer = (state=initState ,action) => {
    
switch (action.type ) {
    case "request": 
          
    let account = action.payload
    
        
    default:
        return state
        
}}

export default loginReducer

