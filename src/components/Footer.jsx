import React from 'react'
import "./footer.css"
import { Link } from 'react-router-dom'

function Footer() {
  return (
        <footer>
            <div className="footer-area">
            <div >
                 <ul className='footer-top'>
                    <li style={{textDecoration: "none", color: "#1c2951"}}><h2>Coinix</h2></li>
                    <li style={{fontWeight: "600"}}>Are you ready to dive into crypto ?</li>
                 </ul>
            </div>
            <div className='footer-menulist'>
                <div className="footer-container">
                    <h5 style={{marginBottom: "10px", marginLeft:"-20px"}}>QUICK NAVIGATE</h5>
                    <ul>
                        <Link to="/coins/bitcoin" style={{textDecoration:"none", color: "#d9dddc"}}><li>Bitcoin</li></Link>
                        <Link to="/coins/ethereum" style={{textDecoration:"none", color: "#d9dddc"}}><li>Ethereum</li></Link>
                        <Link to="/coins/solana" style={{textDecoration:"none", color: "#d9dddc"}}><li>Solana</li></Link>
                    </ul>
                </div>

                <div className='copyright-area'>
                Last Modified: Saturday, 30 Jan, 2024 <br/>
                © Copyright 2024 - All Rights Reserved
                </div>
            </div>
            </div>
        </footer>
  )
}

export default Footer
