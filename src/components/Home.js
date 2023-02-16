import React from 'react';

function Home() {
  return (
    <div>
        <div className='add-to-cart'>
            <img src='https://media.istockphoto.com/id/1201806395/vector/shopping-cart-line-icon-black-editable-stroke-trolley-basket-business-concept-shopping-cart.jpg?s=612x612&w=0&k=20&c=KmXx8oRPoNgNzwhxu3zCsacUF-HSVMtpvGEi3hBbe2w=' />
        </div>
        <h1>Home Component</h1>
        <div className='cart-wrapper'>
            <div className='img-wrapper item'>
                <img src='https://www.freeiconspng.com/thumbs/iphone-x-pictures/apple-iphone-x-pictures-5.png' />
            </div>

            <div className='text-wrapper item'>
                <span>I-Phone</span>
                <span>Price: Rs110000.00</span>
            </div>

            <div className='btn-wrapper item'>
                <button>Add To Cart</button>
            </div>
        </div>
    </div>
  );
}

export default Home;
