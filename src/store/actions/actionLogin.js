import { loginService } from "../../apiServices/loginService"

const reqLogin =  (account) => ({
    type: 're',
    payload: account
})

const resLogin = (account) => ({
    type: 'login',
    payload: account
})

const fetchLogin = (request) => async (dispatch) => {
    
    const res = await loginService()
  
    dispatch(actionLogin(res))
}

export default fetchLogin

