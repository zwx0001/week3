import { createAction } from 'redux-actions'

export const add = createAction('ADD', (val) => {
    return val;
})

export const pro = createAction('PRO', (val,flag) => {
    return {
        val,
        flag
    }
})

export const ck = createAction('CK', (val) => val)

export const ckall = createAction('CKALL',(val)=>val)