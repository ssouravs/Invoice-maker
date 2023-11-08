import React from 'react'

const InvoicePreview = ({editInvoice,setCreateInvoice,setEditInvoice}) => {
  return (
    <div>
      Invoice Preview
      <InvoicePreview 
                  editInvoice={editInvoice} 
                  setCreateInvoice={setCreateInvoice}
                  setEditInvoice={setEditInvoice}
                  />
    </div>
  )
}

export default InvoicePreview
