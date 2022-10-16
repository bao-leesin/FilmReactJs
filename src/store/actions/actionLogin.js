import { loginService } from "../../apiServices/loginService"

const actionLogin = (account) => ({
    type: 'login',
    payload: account
})

const fetchLogin = () => async (dispatch) => {
    const res = await loginService()
  
    dispatch(actionLogin(res))
}

export default fetchLogin

