import React from 'react'

const DatesandSentBy = ({data}) => {
  return (
    <div className='dates'>
      <h4><span>{data.organization}</span></h4>
        <span>Invoice Date:{data.invoiceDate}</span>
        <span>Invoice Due date:{data.dueDate}</span>
        <span></span>
    </div>
  )
}

export default DatesandSentBy
