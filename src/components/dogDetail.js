import React from 'react' 
import { connect } from 'react-redux'
import { addDog, addDogs } from '../actions/addDogs'
const DogDetail = (props) => {
    const handleClick = () => {
        let dog = {...props.dog, isGoodDog: !props.dog.isGoodDog}
        fetch(` http://localhost:3000/pups/${dog.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dog)
        })
        .then(resp => resp.json())
        .then(dog => props.addDog(dog))
        

        fetch('http://localhost:3000/pups')
            .then(resp => resp.json())
            .then(dogs => props.addDogs(dogs))
    
    }
    return (
        <React.Fragment>
            {
                props.dog 
                    ?
            <React.Fragment>
                <img src={props.dog ? props.dog.image : null} />
                <h2>{props.dog ? props.dog.name : null}</h2>
                <button onClick={handleClick}>{props.dog ? props.dog.isGoodDog ? "Good Dog!" : "Bad Dog!" : null}</button>
            </React.Fragment>
                    :
                    null 
            }
        </React.Fragment>
        
    )
}
const mSTP = state => {
    return {
        dog: state.dog
    }
  }
const mDTP = dispatch => {
    return {
        addDog: dog => dispatch(addDog(dog)),
        addDogs: dogs => dispatch(addDogs(dogs))
    }
}
export default connect(mSTP, mDTP)(DogDetail)