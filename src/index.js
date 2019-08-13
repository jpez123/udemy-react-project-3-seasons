//Import libraries
import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

//Class Component
class App extends React.Component {
    //Constructor function (initialization)
    constructor(props) {
        super(props); //Required by constructor (Ensure parent's constructor is called)

        //Initializes state (only time to direct assigment)
        this.state = { 
            lat: null,
            errorMsg: ''
        };
    }

    /* Another way to define state (does not require 'this' - automatically creates constructor function)
    state = { lat: null, errorMessage: '' }; 
    */

    //Component Lifecycle
    componentDidMount() {
        //Geolocation (callback - success, failure)
        window.navigator.geolocation.getCurrentPosition(
            //Call setState to change position
            (position) => this.setState({ lat: position.coords.latitude }),
            (err) => this.setState({ errorMsg: err.message })
        );
    }

    componentDidUpdate() {
        console.log('Re-rendered');
    }


    //Helper function
    renderContent() {
        //Renders state onto DOM (conditional)
        if (this.state.errorMsg && !this.state.lat) {
            return  <div>Error: { this.state.errorMsg }</div>;
        } else if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />
        } else {
            return <Spinner message="Please accept location request" />;
        }
    }

    //Render Method (required)
    render() {
        return (
            <div className="container">
                {this.renderContent()}
            </div>
        )
    }
}

//Renders it to DOM
ReactDOM.render(<App />, document.querySelector('#root'));