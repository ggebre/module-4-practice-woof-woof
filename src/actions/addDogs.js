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

export { addDogs, addDog }