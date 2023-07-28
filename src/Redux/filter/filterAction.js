import { COLORCHANGE, STATUS } from "./filterActionType"

export const colorselect = (color, changeType) => {

    return {
        type: COLORCHANGE,
        payload:{
             color,
             changeType
        }
    }

}

export const statuchage = (status) => {

    return{
        type: STATUS,
        payload: status
    }

}