import React, { useState } from "react";

const Aboutus = () => {
  const HowtoUseAPP = [
    {
      id: 1,
      title: "School Leaving Certificate",
      school:"Resunga English Boarding School Gulmi",
      percentage:"83%"
    },
    {
        id: 2,
        title: "Intermediate Level(+2)",
        school:"VS Niketan Kathmandu",
        percentage:"80%"
    },
    {
        id: 3,
        title: "Bsc.CSIT",
        school:"Samriddhi College Lokanthali",
        percentage:"75%(till 6th sem)"
    }
  ];

  const [aboutData, setAboutData] = useState(HowtoUseAPP);
  return (
    <>
      <section className="our-services">
        <div className="container mb-5">
          <div className="row">
            <div className="col-lg-6 col-12 text-center our-services-leftside-img">
              <img src="images/profile.jpg" alt="" className="img-fluid" />
            </div>
            <div className="col-lg-1"></div>
            <div className="col-12 col-lg-5 our-services-right">
              {/* <h3 className="mini-title">
                --Avaiable @Google And IOS App store only
              </h3> */}
              <h1 className="main-heading">Academic Qualification</h1>
              {aboutData.map((curelm) => {
                  const {id,title,school,percentage}=curelm;
                return (
                  <>
                    <div className="row our-services-info">
                      <div className="col-1 our-services-num">{id}</div>
                      <div className="col-10 our-services-data">
                    <h5>{title}</h5>

                        <p className="main-hero-para">
                         {school}
                        </p>
                        <p className="main-hero-para">
                         {percentage}
                        </p>
                      </div>
                    </div>
                  </>
                );
              })}
              <button className=" btn btn-aboutus">Learn More</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Aboutus;
