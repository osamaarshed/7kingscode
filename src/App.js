import "./App.css";
import Navbar from "./Components/Navbar";
import CarouselSlide from "./Components/CarouselSlide";
import MiddleComponents from "./Components/MiddleComponents";
import MiddleText from "./Components/MiddleText";
import Definitions from "./Components/Definitions";
import Definitions2 from "./Components/Definitions2";
import DefinitionsBullets from "./Components/DefinitionsBullets";
import DefinitionsHeadings from "./Components/DefinitionsHeadings";
import itconsulting2 from "./Images/itconsulting2.jpg";
import customapplications2 from "./Images/customapplications2.jpg";
import offshoreteams2 from "./Images/offshoreteams2.jpg";
import ourpartners from "./Images/ourpartners.jpg";
import talentacquisition from "./Images/talentacquisition.png";
import enterprisesolutions2 from "./Images/enterprisesolutions2.jpg";
import cloudimplementation2 from "./Images/cloudimplementation2.png";
import cybersecurity2 from "./Images/cybersecurity2.png";
import businessintelligence2 from "./Images/businessintelligence2.png";
import uiux2 from "./Images/uiux2.jpg";
import managementconsulting2 from "./Images/managementconsulting2.jpg";
import Whoarewe from "./Components/Whoarewe";
import Ourpartners from "./Components/Ourpartners";
import Form from "./Components/Form";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <CarouselSlide />
      <MiddleText
        text="IT CONSULTING & TECHNOLOGY SERVICES FOR STARTUP TO ENTERPRISE LEVEL
          SOLUTIONS"
      />
      <MiddleComponents />
      <MiddleText
        text="EASY STEPS TO SUCCESS –
            THE PROCESS IS QUITE SIMPLE"
      />
      <div id="itconsulting">
        <Definitions
          image={itconsulting2}
          heading="IT CONSULTING"
          description="With the advancement of technology, there is a plethora of services, solutions, and products available to businesses that target improving operations and boosting revenue. It is imperative to understand the needs of your business and thereby leverage the use of technology for successful outcomes. 7 Kings Code taps into innovative solutions giving you the right knowledge and skills to manage your daily operations."
        />
      </div>
      <div id="customapplications">
        <Definitions2
          image={customapplications2}
          heading="CUSTOM APPLICATIONS"
          description="7 Kings Code specializes in developing reliable, high-performance software and mobile applications that solve unique business problems. We bring rich experience and a client specific approach in business intelligence and mobile application development to provide secure, reliable, and scalable options in an efficient manner."
        />
      </div>
      <div id="offshoreteams">
        <Definitions
          image={offshoreteams2}
          heading="OFF-SHORE & ON-SITE TEAMS"
          description="Operating on an offshore-onsite model, 7 Kings Code has team members located across the globe as well as at the client site, working in conjunction with one another. This model helps to provide solutions for complex and long-lasting projects."
        />
      </div>
      <div id="ourteams">
        <Definitions2
          image={ourpartners}
          heading="OUR PARTNERS"
          description="7 Kings Code owes its award-winning services to its partners. Get access to a large, diverse and qualified pool of consultants with no operational or infrastructural cost."
        />
      </div>
      <div id="talentacquisition">
        <Definitions
          image={talentacquisition}
          heading="TALENT ACQUISITION & VISA SPONSORSHIP"
          description="7 Kings Code’s expert recruiting team holds knowledge in all technical fields that helps in screening and selecting the best fit consultants for our clients. Our ability to host all work visa classes attracts and retains young, competent talent across the US to fit our client needs."
        />
      </div>
      <div id="enterprisesolutions">
        <Definitions2
          image={enterprisesolutions2}
          heading="ENTERPRISE SOLUTIONS"
          description="Through the highs and lows of Full-Cycle Implementation, 7 Kings Code has a successful record of navigating the journey by demonstrating agility and professionalism. Understanding the challenges encountered during major integrations including but not limited to budget and time constraints, turnover, and competing IT initiatives, we help to determine, develop, and improve aspects of functionality according to client needs."
        />
      </div>
      <div id="cloudimplementation">
        <DefinitionsBullets
          image={cloudimplementation2}
          heading="CLOUD IMPLEMENTATION"
          description="The impact of Oracle’s Cloud ERP software is standout evidence that organizations, regardless of their size, have a strong appetite for alternatives. 7 Kings Code offers the following areas of expertise to our clients: "
          bullet1="Project preparation with in-depth scoping sessions"
          bullet2="Strategy development for data conversion and change management"
          bullet3="Cloud Integration Services"
          bullet4="Cloud ERP evaluation services"
          bullet5="Manage, convert, and map data from legacy systems"
          bullet6="Oracle ERP & HR Cloud Implementation services"
        />
      </div>
      <div id="cybersecurity">
        <DefinitionsHeadings
          image={cybersecurity2}
          heading="CYBER SECURITY"
          subheading1="Identity & Access Management"
          description1="Arguably the most crucial element is protection against theft and breaches to ensure high productivity and competitiveness to achieve goals and maintain regulations. 7 Kings Code team of security experts aids in recognizing hurdles and implementing solutions for stability and long-term success."
          subheading2="Infrastructure & Endpoint Security"
          description2="Armed with the latest infrastructure tools and endpoint security services, 7 Kings Code aims in enhancing the security of the network and systems within your IT infrastructure via ongoing assessments, along with 24/7 management and security."
        />
      </div>
      <div id="businessintelligence">
        <DefinitionsBullets
          image={businessintelligence2}
          heading="BUSINESS INTELLIGENCE"
          description="The increased demand and reliance on business intelligence only confirms its valuable importance in the industry. Analyzing and evaluating existing current trends is just as important as looking at past data. By leveraging KPIs and metrics, data visualization, and predictive analytics, 7 Kings Code concentrates on forecasting and shaping outcomes for the benefit of the clients. Our services include: "
          bullet1="Business Intelligence & Analytics Assessment"
          bullet2="Standard, configurable KPIs, Dashboards and Analytics for industry specific needs"
          bullet3="Descriptive and Diagnostic Analytics tailored to your business initiatives"
          bullet4="Integrated Analytics solution that provides real-time scoring for business workload"
        />
      </div>
      <div id="uiux">
        <Definitions
          image={uiux2}
          heading="PRODUCT UI/UX CONSULTING"
          description="A complete software and cross-functional development team that covers the full technology stack including both, front-end and back-end services. 7 Kings Code utilizes a rich and involved development strategy, i.e., DevOps. These are experts who are not just back-end developers but can also fluently communicate about front-end tasks with key stakeholders."
        />
      </div>
      <div id="managementconsulting">
        <Definitions2
          image={managementconsulting2}
          heading="MANAGEMENT CONSULTING"
          description="7 Kings Code goes hand in hand with clients during the sourcing, selecting, and negotiating phases of their recruiting journey. Our diverse database of market and supplier intelligence ensures that the selected consultant is a proficient one that drives business success."
        />
      </div>
      <MiddleText
        text="A LITTLE BIT ABOUT US
              AND OUR PREVIOUS WORK
              "
      />
      <Whoarewe />
      <MiddleText text="OUR PARTNERS" />
      <Ourpartners />
      <Form />
      <Footer />
    </>
  );
}

export default App;
