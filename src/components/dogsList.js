import React from 'react' 
import Dog from './dog'
import { connect } from 'react-redux'
import { addDogs } from '../actions/addDogs'

class DogsList extends React.Component {
    
    componentDidMount(){
        console.log("DID MOUNT!!!!!")
        fetch('http://localhost:3000/pups')
            .then(resp => resp.json())
            .then(dogs => this.props.addDogs(dogs))
    }
    renderDogs = () => {
        return this.props.dogs.map(dog => <Dog key={dog.id} dog={dog} />)
    }

    filteredDogs = (filterOn) => {
    
        return this.props.dogs.filter(dog => dog.isGoodDog === filterOn).map(dog => <Dog key={dog.id} dog={dog} />)
    }
    render() {
        // console.log()
        return(
            <React.Fragment>
                { this.props.filter === null 
                        ?
                        this.renderDogs()
                        :
                        this.filteredDogs(this.props.filter)
                }
                {/* {this.renderDogs()} */}
            </React.Fragment>
        )
    }
}
const mSTP = state => {
    return {
        dogs: state.dogs,
        filter: state.filter
    }
}
const mDTP = dispatch => {
    return {
        addDogs: dogs => dispatch(addDogs(dogs))
    }
}

export default connect(mSTP, mDTP)(DogsList) 