import React, { useState } from "react";

const HowItWorks = () => {
  const Workapi = [
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
  ];

  const [workData, setWorkData] = useState(Workapi);
  return (
    <>
      <section>
        <div className="container work-container">
          <h1 className="main-heading text-center">How does it Work?</h1>
          <div className="row">
            {workData.map((curElm) => {
              const { id, logo, title, info } = curElm;
              return (
                <>
                  <div className="col-lg-4 col-md-4 col-12 text-center work-container-subdiv">
                    <i className={`fontawesome-style ${logo}`}/>
                    <h2 className="sub-heading">{title}</h2>
                    <p className="main-hero-para w-100">{info}</p>
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

export default HowItWorks;
