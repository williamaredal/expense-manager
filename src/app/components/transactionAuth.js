import React, { useState } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return{
        currentState : state,
    }
}


function TransactionAuthentication (props) {

    return (
        <div>
            <p>
                TransactionAuthentication page
            </p>
        </div>
    )
}

export default connect(mapStateToProps)(TransactionAuthentication);