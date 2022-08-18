import React,{useState} from 'react';
//libraries
import swal from 'sweetalert';

import './App.css';

//components
import CartItem from './components/cards/CartItem';
import Checkout from './components/cards/Checkout';

function App() {

  //State Where the Card Item Data is Stored
  const [data, setData] = useState<Array<Object>>([
    {
      id:1,
      img:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80",
      title:'Item Title',
      quantity:10,
      price : 300
    },
    {
      id:2,
      img:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80",
      title:'Item Title',
      quantity:10,
      price : 300
    }
  ])

  //Function To Remove Item From the Cart
  const removeItem = (id:number) => {
    setData(data?.filter((data:any) => data?.id !== id))
  }

  return (
    <div className="App">
        {
          data?.length > 0 ? (
          <>
            <header className='page_header'>
              <h1>Cart ({data?.length})</h1>
            </header>
            <div className="cart_wrapper">
              <div className="cart_items_list">
                <div className="delivery_address">
                  <p>
                    Deliver to : Kunal Shelke, 400010<br/>
                    B-1801,FLOOR-18,1B NEW HIND MILL, RAMBHAU BHOGLE MARG, MILL WORKER TRANSIT BUILDING, Mumbai
                  </p>
                  <button>Change</button>
                </div>
                <div className='cart_items'>
                  {
                    data?.map((item:object,index:number) => (
                      <CartItem itemDetail={item} key={index} removeItem={removeItem}/>
                    ))
                  }
                </div>
                <div className="remove_all_items">
                  <button className="remove_all_items_btn" onClick={() => {swal({
                      title: "Are you sure?",
                      text: "Are you sure that you want to Remove All The Items From The Cart?",
                      icon: "warning",
                      dangerMode: true,
                    }).then(() => setData([]))}}>Remove All Items</button>
                </div>
              </div>
              <Checkout price={data?.map((item:any) => (item?.price)).reduce((prev:number, curr:number) => prev + curr, 0)} totalItems={data?.length}/>
            </div>
          </>
          ) : (  
              <header className='page_header'>
                <h1>Cart Is Empty</h1>
                <button>Return</button>
              </header>
          )
        }
    </div>
  );
}

export default App;
