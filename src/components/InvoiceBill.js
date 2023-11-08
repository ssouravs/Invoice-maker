import React from 'react'

const InvoiceBill = ({data}) => {

  const totalAmount = data.reduce((accumulator, item) => {
    return accumulator + item.price * item.quantity;
  }, 0);
  return (
    <div className='invoice-bill'>
      <table className='bill-table'>
        <tr className='title-row'>
            <th>Description</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Amount</th>
        </tr>
        {
        data.map((item, index) => (
          <>
          <tr key={index} className='item-row'>
            <td>{item.description}</td>
            <td>{item.quantity}</td>
            <td>{item.price}</td>
            <td>{item.price*item.quantity}</td>
          </tr>
          
          </>
        ))}
        
      </table>
      <div className='sum-amount'>
          <span className='sum'>Total Amount: {totalAmount}</span>
        </div>
    </div>
  )
}

export default InvoiceBill
