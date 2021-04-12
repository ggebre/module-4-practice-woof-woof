import React from 'react' 
import Dog from './dog'
import { connect } from 'react-redux'
import { addDogs } from '../actions/addDogs'

class DogsList extends React.Component {
    
    componentDidMount(){
        fetch('http://localhost:3000/pups')
            .then(resp => resp.json())
            .then(dogs => this.props.addDogs(dogs))
    }
    renderDogs = () => {
        return this.props.dogs.map(dog => <Dog key={dog.id} dog={dog} />)
    }

    render() {
        return(
            <React.Fragment>
                {this.renderDogs()}
            </React.Fragment>
        )
    }
}
const mSTP = state => {
    return {
        dogs: state.dogs
    }
}
const mDTP = dispatch => {
    return {
        addDogs: dogs => dispatch(addDogs(dogs))
    }
}

export default connect(mSTP, mDTP)(DogsList) 