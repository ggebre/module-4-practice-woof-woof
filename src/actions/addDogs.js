const addDogs = dogs => {
    return {
        type: 'ADD_DOGS',
        dogs
    }
}
const addDog = dog => {
    return {
        type: 'ADD_DOG',
        dog
    }
}
const filter = () => {
    return {
        type: "FILTER_ON"
    }
}

export { addDogs, addDog, filter }