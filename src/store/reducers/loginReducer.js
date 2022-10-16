const initState = { 
    exist: false,
    status: 'beforeLogin'
}


const loginReducer = (state=initState ,action) => {
    
switch (action.type ) {
    case "login": 
          
    let account = action.payload
    
    if (account.username !== 'us2' )
        return  {
            exist: false,
            status: 'notLogin'    
        }
        
    if (account.password == 'pw1')
        return          {
            exist: true,
            status: 'isLogin'
        }
        
    default:
        return state
        
}}

export default loginReducer

