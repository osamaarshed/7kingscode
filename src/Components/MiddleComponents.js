import React, { useState } from "react";
import ToggleButton from "react-bootstrap/ToggleButton";
import Card from "react-bootstrap/Card";
import search from "../Images/search.png";
import monitor from "../Images/monitor.png";
import globe from "../Images/globe.png";
import enterprisesolutions from "../Images/enterprisesolutions.png";
import managementconsultant from "../Images/managementconsultant.png";
import security from "../Images/security.png";
import uiux from "../Images/uiux.png";
import cloud from "../Images/cloud.png";
import businessintelligence from "../Images/businessintelligence.png";
import "../App.css";
function MiddleComponents() {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);
  const [checked5, setChecked5] = useState(false);
  const [checked6, setChecked6] = useState(false);
  const [checked7, setChecked7] = useState(false);
  const [checked8, setChecked8] = useState(false);
  const [checked9, setChecked9] = useState(false);

  //   const radios = [
  //     { name: "Active", value: "1" },
  //     { name: "Radio", value: "2" },
  //     { name: "Radio", value: "3" },
  //   ];

  return (
    <>
      <div className="container">
        <div className="row middlecomponent-row">
          <div className="col-xl-3 col-lg-4 col-sm-12">
            <Card className="full-card">
              <Card.Img
                className="card-img img-fluid"
                variant="top"
                src={search}
              />
              <Card.Body className="card-body">
                <Card.Title>IT CONSULTING</Card.Title>
                <Card.Text>
                  <ToggleButton
                    className="mb-2"
                    id="toggle-check1"
                    type="checkbox"
                    variant="outline-primary"
                    checked={checked1}
                    value="1"
                    onChange={(e) => setChecked1(e.currentTarget.checked1)}
                  >
                    <a href="#itconsulting">Read More</a>
                  </ToggleButton>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-12">
            <Card className="full-card">
              <Card.Img
                className="card-img img-fluid"
                variant="top"
                src={monitor}
              />
              <Card.Body className="card-body">
                <Card.Title>CUSTOM APPLICATION</Card.Title>
                <Card.Text>
                  <ToggleButton
                    className="mb-2"
                    id="toggle-check2"
                    type="checkbox"
                    variant="outline-primary"
                    checked={checked2}
                    value="1"
                    onChange={(e) => setChecked2(e.currentTarget.checked2)}
                  >
                    <a href="#customapplications">Read More</a>
                  </ToggleButton>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-12">
            <Card className="full-card">
              <Card.Img
                className="card-img img-fluid"
                variant="top"
                src={globe}
              />
              <Card.Body className="card-body">
                <Card.Title>OFFSHORE & ONSITE TEAMS</Card.Title>
                <Card.Text>
                  <ToggleButton
                    className="mb-2"
                    id="toggle-check3"
                    type="checkbox"
                    variant="outline-primary"
                    checked={checked3}
                    value="1"
                    onChange={(e) => setChecked3(e.currentTarget.checked3)}
                  >
                    <a href="#offshoreteams">Read More</a>
                  </ToggleButton>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-12">
            <Card className="full-card">
              <Card.Img
                className="card-img img-fluid"
                variant="top"
                src={enterprisesolutions}
              />
              <Card.Body className="card-body">
                <Card.Title>ENTERPRISE SOLUTIONS</Card.Title>
                <Card.Text>
                  <ToggleButton
                    className="mb-2"
                    id="toggle-check4"
                    type="checkbox"
                    variant="outline-primary"
                    checked={checked4}
                    value="1"
                    onChange={(e) => setChecked4(e.currentTarget.checked4)}
                  >
                    <a href="#enterprisesolutions">Read More</a>
                  </ToggleButton>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-12">
            <Card className="full-card">
              <Card.Img
                className="card-img img-fluid"
                variant="top"
                src={cloud}
              />
              <Card.Body className="card-body">
                <Card.Title>CLOUD IMPLEMENTATION</Card.Title>
                <Card.Text>
                  <ToggleButton
                    className="mb-2"
                    id="toggle-check5"
                    type="checkbox"
                    variant="outline-primary"
                    checked={checked5}
                    value="1"
                    onChange={(e) => setChecked5(e.currentTarget.checked5)}
                  >
                    <a href="#cloudimplementation">Read More</a>
                  </ToggleButton>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-12">
            <Card className="full-card">
              <Card.Img
                className="card-img img-fluid"
                variant="top"
                src={security}
              />
              <Card.Body className="card-body">
                <Card.Title>CYBER SECURITY SERVICES</Card.Title>
                <Card.Text>
                  <ToggleButton
                    className="mb-2"
                    id="toggle-check6"
                    type="checkbox"
                    variant="outline-primary"
                    checked={checked6}
                    value="1"
                    onChange={(e) => setChecked6(e.currentTarget.checked6)}
                  >
                    <a href="#cybersecurity">Read More</a>
                  </ToggleButton>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-12">
            <Card className="full-card">
              <Card.Img
                className="card-img img-fluid"
                variant="top"
                src={businessintelligence}
              />
              <Card.Body className="card-body">
                <Card.Title>BUSINESS INTELLIGENCE</Card.Title>
                <Card.Text>
                  <ToggleButton
                    className="mb-2"
                    id="toggle-check7"
                    type="checkbox"
                    variant="outline-primary"
                    checked={checked7}
                    value="1"
                    onChange={(e) => setChecked7(e.currentTarget.checked7)}
                  >
                    <a href="#businessintelligence">Read More</a>
                  </ToggleButton>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-12">
            <Card className="full-card">
              <Card.Img
                className="card-img img-fluid"
                variant="top"
                src={uiux}
              />
              <Card.Body className="card-body">
                <Card.Title>PRODUCT UIUX CONSULTING</Card.Title>
                <Card.Text>
                  <ToggleButton
                    className="mb-2"
                    id="toggle-check8"
                    type="checkbox"
                    variant="outline-primary"
                    checked={checked8}
                    value="1"
                    onChange={(e) => setChecked8(e.currentTarget.checked8)}
                  >
                    <a href="#uiux">Read More</a>
                  </ToggleButton>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-12">
            <Card className="full-card">
              <Card.Img
                className="card-img img-fluid"
                variant="top"
                src={managementconsultant}
              />
              <Card.Body className="card-body">
                <Card.Title>MANAGEMENT CONSULTING</Card.Title>
                <Card.Text>
                  <ToggleButton
                    className="mb-2"
                    id="toggle-check9"
                    type="checkbox"
                    variant="outline-primary"
                    checked={checked9}
                    value="1"
                    onChange={(e) => setChecked9(e.currentTarget.checked9)}
                  >
                    <a href="#managementconsulting">Read More</a>
                  </ToggleButton>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default MiddleComponents;
