import React from "react";
import "./style.scss";
import { BreadCrumbs } from "Components/UI Components/Molecules";
import { DashboardHeader, SideBar } from "Components/UI Components/Organisms";

const AboutPageTemplate = () => {
  return (
    <div className="main_body">
      <div className="dashboard_main">
        <SideBar />
        <div className="dashboard">
          <DashboardHeader />
          <div className="breadCrumbSection">
            <BreadCrumbs pageHistory={[["Home", "/"]]} currentPage={"about"} />
          </div>

          <div className="aboutSection">
            <h3>Welcome to TIJORI where security meets simplicity.</h3>
            
            <div className="feildSection">
              <p>
                Welcome to TIJORI, where security is our top priority.<br></br>
                We are a dedicated team committed to revolutionizing password management<br></br>
                through innovative solutions.Our journey began with the recognition of the<br></br>
                critical need for robust security measures in today&apos;s digital landscape.<br></br>
                With expertise in encryption, authentication, and data protection, we have<br></br>
                developed a platform that ensures the utmost security for your sensitive information.<br></br>
                Transparency and trust are fundamental to our approach, as we believe in empowering<br></br>
                users with the tools they need to safeguard their digital identities.<br></br>
                Join us in our mission to provide peace of mind in an increasingly interconnected world.<br></br>
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPageTemplate;
