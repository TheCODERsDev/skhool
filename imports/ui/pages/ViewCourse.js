import React from 'react';
import { Link } from 'react-router';
import { Container, Col, Row, Button } from 'reactstrap';

export default class ViewCourse extends React.Component {
  render() {
    return (
      <Container className="ViewCourse">
        <Row>
          <Col xs={12}>
            <h1>Meteor React</h1>
            <p>
              The engine of our school<br />
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-half"></i>
            </p>
          </Col>
          <Col xs={12} sm={8}>
            <img src="http://lorempixel.com/1200/800/nature/" className="img-fluid" />
            <h5>Description</h5>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Col>
          <Col xs={12} sm={4} className="text-center">
            <p><Button color="primary" bsSize="large">Enroll</Button></p>
            <p>
              <strong>Videos:</strong> 16<br/>
              <strong>Length:</strong> 5.4 Hours<br/>
              <strong>Level:</strong> Beginner<br/>
            </p>
            <div className="card hovercard">
              <div className="cardheader">

              </div>
              <div className="avatar">
                <img alt="" src="http://lorempixel.com/100/100/people/9/" />
              </div>
              <div className="info">
                <div className="title">
                  <a target="_blank" href="http://scripteden.com/">Script Eden</a>
                </div>
                <div className="desc">Passionate designer</div>
                <div className="desc">Curious developer</div>
                <div className="desc">Tech geek</div>
              </div>
              <div className="bottom">
                  <a className="btn btn-primary btn-twitter btn-sm" href="https://twitter.com/webmaniac">
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a className="btn btn-danger btn-sm" rel="publisher" href="https://plus.google.com/+ahmshahnuralam">
                    <i className="fa fa-google-plus"></i>
                  </a>
                  <a className="btn btn-primary btn-sm" rel="publisher" href="https://plus.google.com/shahnuralam">
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a className="btn btn-warning btn-sm" rel="publisher" href="https://plus.google.com/shahnuralam">
                    <i className="fa fa-behance"></i>
                  </a>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={8}>
            <h2>Syllabus</h2>
            <table className="table">
              <tbody>
                <tr>
                  <td style={{ whiteSpace: 'nowrap'}}>Lesson 1:</td>
                  <td><Link to="/lesson">Exposure to sofa fire</Link></td>
                </tr>
                <tr>
                  <td style={{ whiteSpace: 'nowrap'}}>Lesson 2:</td>
                  <td><Link to="/lesson">Spirochetal infection, unspecified</Link></td>
                </tr>
                <tr>
                  <td style={{ whiteSpace: 'nowrap'}}>Lesson 3:</td>
                  <td><Link to="/lesson">Corrosion of unspecified degree of multiple right fingers (nail), not including thumb, subsequent encounter</Link></td>
                </tr>
                <tr>
                  <td style={{ whiteSpace: 'nowrap'}}>Lesson 4:</td>
                  <td><Link to="/lesson">Rheumatoid myopathy with rheumatoid arthritis of left ankle and foot</Link></td>
                </tr>
                <tr>
                  <td style={{ whiteSpace: 'nowrap'}}>Lesson 5:</td>
                  <td><Link to="/lesson">Stress fracture, pelvis</Link></td>
                </tr>
                <tr>
                  <td style={{ whiteSpace: 'nowrap'}}>Lesson 6:</td>
                  <td><Link to="/lesson">Driver of pick-up truck or van injured in collision with other nonmotor vehicle in nontraffic accident, sequela</Link></td>
                </tr>
                <tr>
                  <td style={{ whiteSpace: 'nowrap'}}>Lesson 7:</td>
                  <td><Link to="/lesson">Disorder of fructose metabolism, unspecified</Link></td>
                </tr>
                <tr>
                  <td style={{ whiteSpace: 'nowrap'}}>Lesson 8:</td>
                  <td><Link to="/lesson">Other mechanical complication of ventricular intracranial (communicating) shunt</Link></td>
                </tr>
                <tr>
                  <td style={{ whiteSpace: 'nowrap'}}>Lesson 9:</td>
                  <td><Link to="/lesson">Displaced pilon fracture of unspecified tibia, initial encounter for closed fracture</Link></td>
                </tr>
                <tr>
                  <td style={{ whiteSpace: 'nowrap'}}>Lesson 10:</td>
                  <td><Link to="/lesson">Intentional self-harm by drowning and submersion while in bathtub, sequela</Link></td>
                </tr>
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
    );
  }
}
