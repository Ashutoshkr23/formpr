import React from 'react'

const OrderHistoryComp = ({ orderHistory }) => {
    let data = orderHistory
    for (let i = 0; i < data.length; i++) {
        // Access the object at the current index
        const obj = data[i];

        // Edit the desired values
        obj.shippingAddress = "India";
        obj.statusHistory = "order placed";

        // Update the modified object back into the array
        data[i] = obj;
    }

    const tableData = Array.isArray(data) ? data : [];
    return (
        <div>
            <div>
                <h1>Order History</h1>
                {orderHistory.length > 0 ? (
                    <table>
                        <thead>
                            <tr>
                                {Object.keys(tableData[0] || {}).map(key => (
                                    <th key={key}>{key}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.map((row, index) => (

                                <tr key={index}>
                                    {Object.values(row).map((value, index) => (
                                        <td key={index} className='text-sm '>{value}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>No order history available.</p>
                )}
            </div>
        </div>
    )
}

export default OrderHistoryComp