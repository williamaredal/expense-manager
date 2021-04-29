import React, { useState } from 'react';

export default function Transaction () {
    const [transactionDetails, updateTransaction] = useState({
        ammount : 0,
        date : "someDate",
    });

    return (
        <div>
            <p>
                this is a transaction page with Ammount: {transactionDetails.ammount} Date: {transactionDetails.date}
            </p>
        </div>
    )
}