import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  dataabout,
  meta,
  worktimeline,
  // skills,
  services,
  plans
} from "../../content_option";

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title>  {meta.title}| Plans </title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
        <Col lg="8">
            <h1 className="display-4 mb-4">About Me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{dataabout.title}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>{dataabout.aboutme}</p>
            </div>
          </Col>
        </Row>
        {/* <Row className=" sec_sp">
          <Col lg="5">
            <h1 className="color_sec py-4">Plans</h1>
          </Col>
          <Col lg="7">
            <table className="table caption-top">
              <tbody>
                {worktimeline.map((data, i) => {
                  return (
                    <tr key={i}>
                      {data.img?(
                      <img src={data.img} alt="" className="icons"/>):(<td></td>)}
                      <th scope="row">{data.plan}</th>                     
                      <td>{data.details}</td>
                      <td>{data.sessions}</td>
                      <td>{data.cost}</td>                     
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
          
        </Row> */}
        {/* <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Skills</h3>
          </Col>
          <Col lg="7">
            {skills.map((data, i) => {
              return (
                <div key={i}>
                  <h3 className="progress-title">{data.name}</h3>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{
                        width: `${data.value}%`,
                      }}
                    >
                      <div className="progress-value">{data.value}%</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Col>
        </Row> */}
        {/* <Row className="sec_sp">
          <Col lang="5">
            <h1 className="color_sec py-4">Plans</h1>
          </Col>
          <Col lg="7">
            {services.map((data, i) => {
              return (
                <div className="service_ py-4" key={i}>
                  <h2 className="service__title">{data.img?(
                      <img src={data.img} alt="" className="othericons"/>):(<td></td>)}{data.title}</h2>
                  <p className="service_desc">{data.description}</p>
                  <p className="service_desc">{data.sessions}</p>
                  <p className="service_desc">{data.timePerSession}</p>
                  <p className="service_desc">{data.cost}</p>
                </div>
              );
            })}
          </Col>
        </Row> */}
        <Col lg="8">
            <h1 className="display-4 mb-4">Plans</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        <div className="container3">
        <Row className="container2">
        {plans.map((data, i) => {
            return (
        <div key={i} class="mx-3 mb-4 pack-container text ">
  <div class="header">
    <p class="title">
    {data.title}
    </p>
    <div class="price-container">
      <span>$</span>{data.cost}
      <span>/mo</span>
    </div>
  </div>
  <div>
    <ul class="lists">
      <li class="list">
        <span>
          <svg aria-hidden="true" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.5 12.75l6 6 9-13.5" stroke-linejoin="round" stroke-linecap="round"></path>
          </svg>
        </span>
        <p>
        {data.sessions}
        </p>
      </li>
      <li class="list">
        <span>
          <svg aria-hidden="true" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.5 12.75l6 6 9-13.5" stroke-linejoin="round" stroke-linecap="round"></path>
          </svg>
        </span>
        <p>
        {data.timePerSession}
        </p>
      </li>
      <li class="list">
        <span>
          <svg aria-hidden="true" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.5 12.75l6 6 9-13.5" stroke-linejoin="round" stroke-linecap="round"></path>
          </svg>
        </span>
        <p>
        {data.description}
        </p>
      </li>
    </ul>
  </div>
  <div class="button-container">
    <Link to="/contact">
    <button type="button" >
      Buy Now
    </button></Link>
  </div>
</div>);
          })}
        </Row></div>
      </Container>
    </HelmetProvider>
  );
};

