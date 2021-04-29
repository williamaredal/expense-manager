import React, { useState } from 'react';

export default function TransactionHistory () {
    const [exampleHistory, updateHistory] = useState([
        { 
            ammount : 0,
            date : "someDate1",
        },
        { 
            ammount : 10,
            date : "someDate2",
        },
        { 
            ammount : -10,
            date : "someDate3",
        },
    ]);

    
    return (
        <div>
            {exampleHistory.map( (element) => {
                <div>
                    {element.ammount}
                    {element.date}
                </div>
            })}
        </div>
    )
}