import React, { useState } from 'react';

export default function TransactionAuthentication (transactionDetails) {

    return (
        <div>
            <p>
                Transaction values spread: {...transactionDetails}
            </p>
        </div>
    )
}