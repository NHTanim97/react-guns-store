import React, { useEffect, useState } from 'react';
import Singlegun from '../Singlegun/Singlegun';

const Allgun = ({increment}) => {

    const [guns, setGuns] = useState([])

    useEffect( () =>{
        fetch('https://raw.githubusercontent.com/mir-hussain/guns/main/data.json')
        .then(response => response.json())
        .then(data => setGuns(data))
    }, [])

    return (
        <div className='mt-8 container mx-auto mb-20'>
            <h1 className='text-3xl font-extrabold text-white-100'>Welcome To <span className='text-orange-400'>Gun Store</span></h1>
            <p className='mt-3 font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ratione maxime, vitae laudantium dignissimos eius itaque alias. Consequuntur totam at modi, reiciendis eaque mollitia eligendi molestias earum cum aspernatur dicta!</p>

            <div className='w-[90%] mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    guns.map(gun => <Singlegun gun = {gun} increment = {increment}></Singlegun>)
                }
            </div>
        </div>
    );
};

export default Allgun;