//Import libraries
import React from 'react';
import ReactDOM from 'react-dom';

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

        //Geolocation (callback - success, failure)
        window.navigator.geolocation.getCurrentPosition(
            //Call setState to change position
            (position) => {
                this.setState({ lat: position.coords.latitude });
            },
            (err) => {
                this.setState({ errorMsg: err.message });
            }
        );
    }

    //Component Lifecycle
    componentDidMount() {
        console.log('Mounted');
    }

    componentDidUpdate() {
        console.log('Re-rendered');
    }

    //Render Method (required)
    render() {
        //Renders state onto DOM (conditional)
        if (this.state.errorMsg && !this.state.lat) {
           return  <div>Error: { this.state.errorMsg }</div>;
        } else if (!this.state.errorMessage && this.state.lat) {
            return <div>Lattitude: { this.state.lat } </div>;
        } else {
            return <div>Loading...</div>;
        }
    }
}

//Renders it to DOM
ReactDOM.render(<App />, document.querySelector('#root'));