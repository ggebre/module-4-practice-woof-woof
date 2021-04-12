const  dogsReducer = (state = {dogs: [], filter: null}, action) => {
    switch(action.type){
      case "ADD_DOGS":
        return {...state, dogs: action.dogs}
      case "ADD_DOG":
        return {...state, dog: action.dog}
      case "FILTER_ON":
        return {...state, filter: !state.filter}
      default:
        return state
    }
    
  }

  export default dogsReducer