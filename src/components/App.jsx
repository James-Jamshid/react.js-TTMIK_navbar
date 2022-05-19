import React from 'react'
import { Link } from 'react-router-dom'
import { IconContext } from 'react-icons'
import { BsCart } from 'react-icons/bs';
import { AiOutlineBell } from 'react-icons/ai';
import '../style.css'

const App = () => {
    return (
        <IconContext.Provider value={{ size: '1.2em' }}>


            <div className="container">
                <div className="logo">
                    <Link to='/'>
                        <div className="logo_inner">
                            TALK TO ME <br /> IN KOREAN
                        </div>
                    </Link>
                </div>
                <div className="btn">
                    <div className="btn_below">
                        <Link to='/LevelTest'>
                            <div className="btn_inner">
                                Level Test
                            </div>
                        </Link>
                        <Link to='/Learning'>
                            <div className="btn_inner">
                                My Learning Center
                            </div>
                        </Link>
                        <Link to='Pricing'>
                            <div className="btn_inner">
                                Pricing
                            </div>
                        </Link>
                        <Link to='/Courses'>
                            <div className="btn_inner">
                                Courses
                            </div>
                        </Link>
                        <Link to='/Bookstore'>
                            <div className="btn_inner">
                                Bookstore
                            </div>
                        </Link>


                    </div>
                    <div className="btn_icons">
                        <Link to='/SignIN'>
                            <div className="icons">
                                Sign In
                            </div>
                        </Link>
                        <Link to='/Support'>
                            <div className="icons">
                                Support
                            </div>
                        </Link>
                        <Link to='/Cart'>
                            <div className="icons">
                                <BsCart />
                            </div>
                        </Link>
                        <Link to='/Bell'>
                            <div className="icons">
                                <AiOutlineBell />
                            </div>
                        </Link>

                    </div>
                </div>

            </div>
        </IconContext.Provider>
    )
}

export default App