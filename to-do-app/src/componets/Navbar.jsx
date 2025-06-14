import React from 'react'


const Navbar = () => {
    return (
        <div >
            <div className="box py-5">
                <div className="container">
                    <>
                        <div className="logo hover: transition-all ">
                            <img src="logo.png" alt="" width={100} height={100} />
                            <h1>Noted.</h1>
                        </div>

                    </>
                    <>
                        <div className='grid grid-flow-col grid-rows-4 gap-2 '>
                            <button className=' cursor-pointer hover:font-bold transition-all'>My notes</button>
                            <button className=' cursor-pointer hover:font-bold transition-all'>Completed</button>
                            <button className=' cursor-pointer hover:font-bold transition-all'>Pending</button>

                        </div>

                    </>
                </div>
            </div>
        </div>
    )
}

export default Navbar
