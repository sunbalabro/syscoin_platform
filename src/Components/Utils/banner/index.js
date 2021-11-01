import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Banner(){
    return(
        <>
        <div className="container-fluid row ban" style={{marginTop:'50px',padding:'40px'}}>
            <div className="col-5">
             <h1 style={{fontSize:'4em',fontWeight:'bolder'}}>Future - Proof Payments and Value Transfer</h1>
             <h2 style={{fontWeight:'lighter',marginTop:'20px'}}>Syscoin Platform offers fast and &nbsp; &nbsp; 
             low-cost tokens, assets, and NFTs secured by Bitcoin's censorship-resistance and hashrate.</h2>
            </div>

            <div className="col-7" style={{paddingTop:'50px'}}>
                <h2 style={{fontWeight:'lighter',fontSize:'32px'}}>Blockchain stats</h2>
                <ul>
                    <li>Masternodes enabled 2,476</li>
                    <li>Transaction fee $0.00001853</li>
                    <li>Hashrate 30.97 EH/s</li>

                </ul>

            </div>
{/* 
            <div className="col-4">


            </div> */}

        </div>
        
        </>
    )
}