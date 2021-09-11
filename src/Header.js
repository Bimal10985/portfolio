import React from 'react'

const Header = () => {
    return (
        <>
        <div className="header">
           <div className=" container main-hero-container">
            <div className="row header-row">
                <div className="col-lg-6 col-md-6 col-sm-12 col-12 d-flex justify-content-center flex-column align-item-center">
                    <div className="header-left-side">
                        <h1 className="display-2">
                            Junior Frontend Developer
                        </h1>
                        <p className="main-hero-para">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
                        <h3>Get early access for you</h3>
                         <div className="input-group mt-3">
                             <input type="text" className="rounded-pill w-75 p-2 form-control-text" placeholder="Enter your Email" />
                            <div className="input-group-text">Get it now</div>
                         </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12 d-flex justify-content-center align-item-start">
                <div className="header-right-side">
                    <img src="images/profile.jpg" alt="" />
                </div>
                </div>
                
            </div>
           </div>
           </div>
        </>
    )
}

export default Header
