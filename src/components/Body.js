import React,{useState} from 'react'
import InvoiceList from './InvoiceList';
import InvoicePreview from './InvoicePreview';
import InvoiceForm from './InvoiceForm';
import InvoiceHeader from './InvoiceHeader';
import ClientInfo from './ClientInfo';
import DatesandSentBy from './DatesandSentBy';
import InvoiceBill from './InvoiceBill';
import InvoiceFooter from './InvoiceFooter';
import Notes from './Notes';

const Body = () => {
  const [createInvoice,setCreateInvoice]=useState(true);
  const [editInvoice,setEditInvoice]=useState(false);
  const [tableData,setTableData]=useState([]);
  const [contentData,setContentData]=useState({})

  const handleTableFormSubmit = (formTableData) => {
    setTableData([...tableData, formTableData]);
  };
  const handleContentFormSubmit=(formContentData)=>{
    setContentData(formContentData)
  };

  const handleExit = () => {
    const shouldExit = window.confirm(
      'Are you sure you want to exit? Any unsaved changes will be lost.'
    );

    if (shouldExit) {
      // Reset the data arrays to empty
      setTableData([]);
      setContentData({});
      setCreateInvoice(true); // Return to the createInvoice state
    }
  };

  return (
    <div className='body-continer'> 
      {createInvoice && <div>
      <button className='create-btn' onClick={()=>setCreateInvoice(false)}>Create New Invoice</button>
      <InvoiceList/>
      </div>}
      {(!editInvoice && !createInvoice) && 
              <>
                <div className='invoice-preview-container'>
                  
                  <InvoiceHeader/>
                  <div className='sender-reciever'>
                    <ClientInfo data={contentData}/>
                    <span className='invoiceNo'>SI No: {contentData.invoiceNo}</span>
                    <DatesandSentBy data={contentData}/>
                  </div>
                  <InvoiceBill data={tableData}/>
                  <Notes data={contentData}/>
                  <InvoiceFooter/>
                </div>
                <div className='escape'>
                    <button className='' onClick={()=>setEditInvoice(!editInvoice)}>Edit Info</button>
                    <button onClick={handleExit}>Exit</button>
                  
                  </div>
                </>
                
                  }
      {(editInvoice && !createInvoice) && 
               <>  
                 <InvoiceForm 
                  onFormTableSubmit={handleTableFormSubmit}
                  onFormContentSubmit={handleContentFormSubmit}
                  />
                  <div className='escape'>
                    <button onClick={()=>setEditInvoice(!editInvoice)}>Preview Invoice</button>
                    <button onClick={handleExit}>Exit</button>
                  </div>
               </>   
                  }
    </div>
  )
}

export default Body;
