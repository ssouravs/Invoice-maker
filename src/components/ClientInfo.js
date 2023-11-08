import React from 'react'

const ClientInfo = ({data}) => {
    console.log(data);
    {/*const {name,email,address,number}=data;*/}
  return (
    <div className='client-info'>
      <div>
        <span>{data.name}</span>
      </div>
      <div>
        <span>{data.address}</span>
      </div>
      <div>
        <span> {data.email}</span>
      </div>
      <div>
        <span>{data.number}</span>
      </div>

    </div>
  )
}

export default ClientInfo
