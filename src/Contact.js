import React,{useState} from 'react'

const Contact = () => {

    const [userData, setUserData] = useState({
        firstName:"",
        lastName:"",
        phone:"",
        email:"",
        address:"",
        message:"",

    });
    let name,value;
    const postUserData=(e)=>{
        name=e.target.name  ;
        value=e.target.value ;     
        setUserData({...userData,[name]:value});
    };

    const submitData=async(e)=>{
        e.preventDefault();
        const{firstName,lastName,phone,email,address,message}=userData;
        if(firstName&&lastName&&phone&&email&&address&&message){
        const res=fetch('https://reactfirebaseproject-53a23-default-rtdb.firebaseio.com/userDataRecords.json',
            
        {
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({
                firstName,
                lastName,
                phone,
                email,
                address,
                message,
        
            }),
        }
        );
            if(res){
                setUserData({
                    firstName:"",
                    lastName:"",
                    phone:"",
                    email:"",
                    address:"",
                    message:"",
                })
                alert("Data stored");
            }else{
                alert("please fill the data");
            }
        }else{
            alert("please fill the data");
        }
        
    };
    return (
        <>
            <section className="contactus">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 col-12 mx-auto">
                            <div className="row">
                                <div className="contactus-leftside col-sm-12 col-lg-5">
                                    <h1 className="main-heading-contactus">Connect with Me</h1>
                                    <p className="main-hero-para"> publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the</p>
                                    <div className="contactus-image">
                                        <img src="images/profile.jpg" alt="" className="img-fluid"/>
                                    </div>
                                </div>
                                <div className="col-lg-1"></div>
                                <div className="col-sm-12 col-lg-6 contact-us-rightside">
                                    <form method="POST">
                                      
                                            <div className="row">
                                                <div className="col-12 col-lg-6 contact-input-field">
                                                    <input type="text" name="firstName" id="" className="form-control" placeholder="first name" value={userData.firstName} onChange={postUserData}/>
                                                    
                                                </div>
                                                <div className="col-12 col-lg-6  contact-input-field">
                                                    <input type="text" name="lastName" id="" className="form-control" placeholder="last name" value={userData.lastName} onChange={postUserData}/>
                                                    
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12 col-lg-6  contact-input-field">
                                                    <input type="number" name="phone" id="" className="form-control" placeholder="Phone Number" value={userData.phone} onChange={postUserData}/>
                                                    
                                                </div>
                                                <div className="col-12 col-lg-6 contact-input-field">
                                                    <input type="email" name="email" id="" className="form-control" placeholder="E-mail" value={userData.email} onChange={postUserData}/>
                                                    
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12 contact-input-field">
                                                <input type="text" name="address" id="" className="form-control" placeholder="Address" value={userData.address} onChange={postUserData}/>

                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12 contact-input-field">
                                                <input type="text" name="message" id="" className="form-control" placeholder="Message" value={userData.message} onChange={postUserData}/>

                                                </div>
                                            </div>

                                            <div className="form-check form-checkbox-style">
                                                <input type="checkbox" className="form-check-input" id="flexCheckChecked" />
                                                <label className="form-check-label" className="main-hero-para">I agree that the .... may contact me at the email address or phone number above.</label>
                                            </div>
                                            <button className=" btn btn-contactus" onClick={submitData}>Contact Now</button>
                                        
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact
