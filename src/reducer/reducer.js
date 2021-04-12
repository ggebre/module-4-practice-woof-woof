const  dogsReducer = (state = {dogs: []}, action) => {
    switch(action.type){
      case "ADD_DOGS":
        return {...state, dogs: action.dogs}
      case "ADD_DOG":
        return {...state, dog: action.dog}
      default:
        return state
    }
    
  }

  export default dogsReducer