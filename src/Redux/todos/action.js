import { ADDED, CLEARCOMPLETED, COLORADD, COMPLETEALL, DELETED, TOGGLE } from "./actiontype"

export const added = (value) => {

    return{
        type: ADDED,
        payload: value
    }

}


export const togggle = (id) => {

    return{
        type: TOGGLE,
        payload: id
    }

}

export const coloradd = (id, colors) => {

    return{
        type: COLORADD,
        payload: {
            id,
            colors
        }
    }

}

export const completeAll = () => {

    return{
        type: COMPLETEALL,
    }

}

export const clearcomplete = () => {

    return{
        type: CLEARCOMPLETED,
    }

}

export const delettodo = (id) => {

    return{
        type: DELETED,
        payload: id
    }

}



