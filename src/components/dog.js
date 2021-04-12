import React from 'react' 
import { connect } from 'react-redux'
import { addDog } from '../actions/addDogs'

class Dog extends React.Component {
    handleClick = () => {
        this.props.addDog(this.props.dog)
    }
    render() {
        
        return (
            <div onClick={this.handleClick}>
                <span>{this.props.dog.name}</span>
            </div>
        )
    }
}
const mDTP = dispatch => {
    return {
        addDog: dog => dispatch(addDog(dog))
    }
}

export default connect(null, mDTP)(Dog)