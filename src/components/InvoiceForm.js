import React,{useState} from 'react'

const InvoiceForm = ({onFormTableSubmit,onFormContentSubmit}) => {
    const [isAddTask,setIsAddTask]=useState(false);
    const [formContentData,setFormContentData]=useState({
        name: '',
        address:'',
        number:'',
        email: '',
        bankName: '',
        accountID: '',
        UPI: '',
        organization: '',
        invoiceNO:'',
        invoiceDate:'',
        dueDate:'',
        
    })
    const [formTableData, setFormTableData] = useState({
        description: '',
        quantity:0,
        price: '',
      });

      const handleTableChange = (e) => {
        const { name, value } = e.target;
        setFormTableData({
          ...formTableData,
          [name]: value,
        });
      };
      const handleTableSubmit = (e) => {
        e.preventDefault();
        onFormTableSubmit(formTableData);
        setFormTableData({ description: '',quantity:0, price: '' });
        setIsAddTask(false);
      };


      const handleContentChange = (e) => {
        const { name, value } = e.target;
        setFormContentData({
          ...formContentData,
          [name]: value,
        });
        console.log(formContentData)
      };
      const handleContentSubmit = (e) => {
        e.preventDefault();
        onFormContentSubmit(formContentData);
        setFormContentData({ name: '',address:'',number:'', email: '',bankName: '',accountID: '',UPI: '',organization: '',invoiceNO:'',invoiceDate:'',dueDate:'' 
    });
};

  return (
    <div>
      {/*This is the details of client and company */}
      <div className='form-box'>
        <form onSubmit={handleContentSubmit} className='content-form'>
            <h1>Invoice Form</h1>
            <div className='content-form-input'>
                <div className='input-container'>
                    <label><h4>Full Name of the client:</h4></label>
                    <input
                        name='name'
                        type='text'
                        id=''
                        className='input-element'
                        value={formContentData.name}
                        onChange={handleContentChange}
                        placeholder='Shhivam Sourav'
                    />
                </div>
                <div className='input-container'>
                    <label><h4>Enter Organization Name:</h4></label>
                    <input
                        name='organization'
                        type='text'
                        id=''
                        className='input-element'
                        value={formContentData.organization}
                        onChange={handleContentChange}
                        placeholder='Flipkart'
                    />
                </div>
            </div>
                
            <div className='address-box'>
                <label><h4>Enter Full Address:</h4></label>
                    <textarea
                        name='address'
                        rows="5" 
                        cols="60"
                        type='text'
                        id='address'
                        value={formContentData.address}
                        onChange={handleContentChange}
                        placeholder='Enter Your Address'
                    />
            </div>
            <div className='content-form-input'>
                <div className='input-container'>
                    <label>Contact Number:</label>
                    <input
                        name='number'
                        type='text'
                        id=''
                        className='input-element'
                        value={formContentData.number}
                        onChange={handleContentChange}
                        placeholder='Enter Your Number'
                    />
                </div>
                <div className='input-container'>
                    <label>Email:</label>
                    <input
                        name='email'
                        type='email'
                        id=''
                        className='input-element'
                        value={formContentData.email}
                        onChange={handleContentChange}
                        placeholder='Enter Your Email'
                    />
                </div>
            </div>
            <div className='content-form-input'>
                <div className='input-container'>
                ```<label>Bank Detail of Client:</label>
                        <input
                            name='bankName'
                            type='text'
                            id=''
                            className='input-element'
                            value={formContentData.bankName}
                            onChange={handleContentChange}
                            placeholder='Enter Bank name'
                        />                  
                </div>
                <div className='input-container'>
                    <label>Enter your Account No or UPI-ID:</label>
                            <input
                                name='accountID'
                                type='text'
                                id=''
                                className='input-element'
                                value={formContentData.accountID}
                                onChange={handleContentChange}
                                placeholder='Enter Your Account ID'
                            />
                </div>
            </div>
            <div className='content-form-input'>
                <div className='input-container'>
                    <label>Enter your UPI ID:</label>
                        <input
                            name='UPI'
                            type='text'
                            id=''
                            className='input-element'
                            value={formContentData.UPI}
                            onChange={handleContentChange}
                            placeholder='Enter Your UPI ID'
                        />
                </div>
                <div className='input-container'>
                    <label>Enter your Invoice No:</label>
                        <input
                            name='invoiceNo'
                            type='text'
                            id=''
                            className='input-element'
                            value={formContentData.invoiceNo}
                            onChange={handleContentChange}
                            placeholder='Enter Your Invoice No'
                        />
                </div>
            </div>
            <div className='content-form-input'>
                <div className='input-container'>
                    <label>Enter your Invoice Date</label>
                    <input
                        name='invoiceDate'
                        type='date'
                        id=''
                        className='input-element'
                        value={formContentData.invoiceDate}
                        onChange={handleContentChange}
                    />                    
                </div>
                <div className='input-container'>
                    <label>Enter your Invoice Due Date</label>
                        <input
                            name='dueDate'
                            type='date'
                            id=''
                            className='input-element'
                            value={formContentData.dueDate}
                            onChange={handleContentChange}
                        />                    
                </div>
            </div>
    
            <button id='submit-content' type="submit">Submit</button>
        </form>
                {<button className='add-bill' onClick={()=>setIsAddTask(true)}>Add Bill</button>}
            {
                isAddTask && <div>
                <form onSubmit={handleTableSubmit}
                className='table-form'
                >
                    <input
                    name='description'
                    type='text'
                    id=''
                    value={formTableData.description}
                    onChange={handleTableChange}
                    placeholder='Enter description'
                />
                <input
                    name='quantity'
                    type='number'
                    id=''
                    value={formTableData.quantity}
                    onChange={handleTableChange}
                    placeholder='Enter Quantity'
                />
                <input
                    name='price'
                    type='number'
                    id=''
                    value={formTableData.price}
                    onChange={handleTableChange}
                    placeholder='Enter price'
                />

                <button  type="submit">Submit Bill</button>
                
                </form>
            </div>

        }
        </div>
      
      
    </div>
  )
}

export default InvoiceForm
