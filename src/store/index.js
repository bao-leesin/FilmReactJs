import { configureStore } from "@reduxjs/toolkit"

import reducer from "./reducers"

// const asyncMiddleware = store => next => action => {
//     if (typeof action === 'function') {
//         return action(next)
//     }
//     return next(action)
// }

const reduxStore = configureStore({ 
    reducer
})

export default reduxStore
