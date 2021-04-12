import React from 'react' 
import { connect } from 'react-redux'
const DogDetail = (props) => {
    
    return (
        <React.Fragment>
            {
                props.dog 
                    ?
            <React.Fragment>
                <img src={props.dog ? props.dog.image : null} />
                <h2>{props.dog ? props.dog.name : null}</h2>
                <button>{props.dog ? props.dog.isGoodDog ? "Good Dog!" : "Bad Dog!" : null}</button>
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
export default connect(mSTP)(DogDetail)