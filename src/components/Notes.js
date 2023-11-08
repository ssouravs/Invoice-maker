import React from 'react'

const Notes = ({data}) => {
  return (
    <div className='notes'>
      <p>
        Notes: The amount for the abovementioned bill is to be paid via UPI: {data.UPI} or transferred to Account No {data.accountID} of {data.bankName} 
      </p>
    </div>
  )
}

export default Notes
