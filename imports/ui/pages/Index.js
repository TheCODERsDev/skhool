import React from 'react';
import $ from 'jquery';
import { Jumbotron, Container } from 'reactstrap';
import FlexboxGallery from './../components/FlexboxGallery';

export default class Index extends React.Component {
  componentDidMount() {
    $('#react-root').css('margin-top', 0);
    $('#slides').superslides({
      play: 7000,
      inherit_width_from: '#slider',
      inherit_height_from: '#slider'
    });
  }

  componentWillUnmount() {
    $('#react-root').css('margin-top', '');
  }

  render() {
    return (
      <div>
        <div id="slider" style={{ height: '500px' }}>
          <div id="slides">
            <ul className="slides-container">
              <li>
                <img src="http://i.imgur.com/I7k8SLo.jpg" alt="" />
              </li>
              <li>
                <img src="http://i.imgur.com/f8FgtLc.jpg" alt="Cinelli" />
              </li>
              <li>
                <img src="http://i.imgur.com/XSFLZtD.jpg" width="1024" height="682" alt="Surly" />
              </li>
              <li>
                <img src="http://i.imgur.com/t2OIT8l.jpg" width="1024" height="683" alt="Cinelli" />
              </li>
              <li>
                <img src="http://i.imgur.com/RgYyVYJ.jpg" width="1024" height="685" alt="Affinity" />
              </li>
            </ul>

            <nav className="slides-navigation">
              <a href="#" className="next" style={{ color: '#fff', padding: '30px' }}>
                <i className="fa fa-2x fa-chevron-right"></i>
              </a>
              <a href="#" className="prev" style={{ color: '#fff', padding: '30px' }}>
                <i className="fa fa-2x fa-chevron-left"></i>
              </a>
            </nav>
          </div>
        </div>
        <Container style={{ 'marginTop': '20px'}}>
          <Jumbotron className="text-center">
            <h2>Skhool</h2>
            <p>Cool school for your skills</p>
          </Jumbotron>
          <FlexboxGallery.Container>
            <FlexboxGallery.Item to="/course" image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/placeimg01.jpg">
              Lorem ipsum dolor sit amet
            </FlexboxGallery.Item>
            <FlexboxGallery.Item to="/course" image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/placeimg02.jpg">
              Lorem ipsum dolor sit amet
            </FlexboxGallery.Item>
            <FlexboxGallery.Item to="/course" image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/placeimg03.jpg">
              Lorem ipsum dolor sit amet
            </FlexboxGallery.Item>
            <FlexboxGallery.Item to="/course" image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/placeimg04.jpg">
              Lorem ipsum dolor sit amet
            </FlexboxGallery.Item>
            <FlexboxGallery.Item to="/course" image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/placeimg05.jpg">
              Lorem ipsum dolor sit amet
            </FlexboxGallery.Item>
            <FlexboxGallery.Item to="/course" image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/placeimg06.jpg">
              Lorem ipsum dolor sit amet
            </FlexboxGallery.Item>
            <FlexboxGallery.Item to="/course" image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/placeimg07.jpg">
              Lorem ipsum dolor sit amet
            </FlexboxGallery.Item>
            <FlexboxGallery.Item to="/course" image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/placeimg08.jpg">
              Lorem ipsum dolor sit amet
            </FlexboxGallery.Item>
            <FlexboxGallery.Item to="/course" image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/placeimg09.jpg">
              Lorem ipsum dolor sit amet
            </FlexboxGallery.Item>
            <FlexboxGallery.Item to="/course" image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/placeimg10.jpg">
              Lorem ipsum dolor sit amet
            </FlexboxGallery.Item>
          </FlexboxGallery.Container>
        </Container>
      </div>
    );
  }
}
