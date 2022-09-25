import React from 'react';

const Singlegun = (props) => {
    // console.log(props)
    const {increment} = props;

    const {action, bullet, category, img, name, price} = props.gun
    return (
        <div className=''>
            {/* card */}
            <div className="card w-full h-full shadow m-5 rounded-none">
            <figure className='h-60'><img src={img} alt="Shoes"/></figure>
            <div className="card-body bg-gray-500">
                <h4 className="card-title text-lg">
                {name}
                <div className="badge badge-secondary">NEW</div>
                </h4>
                <p className='text-sm font-light mr-[15px] text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit.!</p>
                <div className='flex flex-row mr-auto -mt-[25px]'>
                    <p>Category : {category}</p>
                    <p className='ml-5 text-white font-bold text-lg'>Price : ${price}</p>
                </div>
                <div>
                    <div className='flex flex-row'>
                        <div className='badge badge-outline'>{action}</div>
                        <div className='badge badge-outline ml-2'>{bullet}</div>
                    </div>
                    <div className='flex flex-row mt-4'>
                        <button onClick={() => increment()} className='btn btn-success text-white'>ADD TO CART</button>
                        <button className='btn btn-info ml-3 text-white'>DETAILS</button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Singlegun;