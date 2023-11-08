import React from 'react'

const InvoiceHeader = () => {
  return (
    <div className='header-invoice'>
      <span><h1>Invoice Bill</h1></span>
      <span className='invoice-print'>
        <button onClick={()=>window.print()} className='print'>Print</button>
        
        <button className='send'>Send</button>
      </span>
    </div>
  )
}

export default InvoiceHeader
