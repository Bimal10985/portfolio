import React, { useState } from "react";

const OurServices = () => {
  const Servicesdata = [
    {
      id: 1,
      logo: "fas fa-file-code",
      title: "Web Development",
      info: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
    },
    {
      id: 2,
      logo: "fas fa-pencil-alt",
      title: "UI/UX Design",
      info: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
    },
    {
      id: 3,
      logo: "fas fa-file-code",
      title: "Programming",
      info: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
    },
    {
      id: 4,
      logo: "fas fa-file-code",
      title: "Digital Marketing",
      info: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
    },
    {
      id: 5,
      logo: "fas fa-file-code",
      title: "Graphic Design",
      info: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
    },
  ];

  const [dataservice, setDataService] = useState(Servicesdata);

  return (
    <>
      <section className="service-main-container">
        <div className="container service-container">
          <h1 className="main-heading text-center">My Services</h1>
          <div className="row">
            {dataservice.map((curelm) => {
                const{id,logo,title,info}=curelm;
              return (
                <>
                  <div className="col-lg-4 col-12  text-center">
                      <div className="work-container-subdiv">
                      <i className={`fontawesome-style ${logo}`}/>
                    <h2 className="sub-heading">{title}</h2>
                    <p className="main-hero-para">{info}</p>
                      </div>
                   
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default OurServices;
