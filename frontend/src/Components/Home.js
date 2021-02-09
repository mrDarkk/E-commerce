import React from 'react';
import Product from './Product';
import './Home.css';

function Home(){
    return(
        <div className="home">
           <div className="home__row">
               <Product
                    id="1"
                    title="A new innovation"
                    price={1200.00}
                    rating={4}
                    image="https://images.livemint.com/img/2019/12/25/600x338/HonorV10-kjUD--621x414@LiveMint_1577285895418.jpg"
                     />
                <Product
                    id="2"
                    title="A new innovation"
                    price={1200.00}
                    rating={4}
                    image="https://images.livemint.com/img/2019/12/25/600x338/HonorV10-kjUD--621x414@LiveMint_1577285895418.jpg"
                     />
                <Product
                    id="3"
                    title="A new innovation"
                    price={1200.00}
                    rating={4}
                    image="https://images.livemint.com/img/2019/12/25/600x338/HonorV10-kjUD--621x414@LiveMint_1577285895418.jpg"
                     />
                <Product
                    id="4"
                    title="A new innovation"
                    price={1200.00}
                    rating={4}
                    image="https://images.livemint.com/img/2019/12/25/600x338/HonorV10-kjUD--621x414@LiveMint_1577285895418.jpg"
                     />
           </div>
        </div>
    )
}
export default Home;