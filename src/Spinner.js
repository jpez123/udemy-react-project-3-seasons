//Import libraries
import React from 'react';

//Functional Component
const Spinner = (props) => {
    return (
        <div className="ui active dimmer">
            <div className="ui big text loader">
                {props.message}
            </div>
        </div>
    );
};

//Default props
Spinner.defaultProps = {
    message: 'Loading...'
};

//Exports component
export default Spinner;