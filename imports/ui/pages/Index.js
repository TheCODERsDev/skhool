import React from 'react';
import $ from 'jquery';
import { Jumbotron, Grid } from 'react-bootstrap';

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
        <Grid style={{ 'marginTop': '20px'}}>
          <Jumbotron className="text-center">
            <h2>Skhool</h2>
            <p>Cool school for your skills</p>
          </Jumbotron>
          <div className="flexbox-gallery">
            <a href="https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/placeimg01.jpg">
              <figure>
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/placeimg01.jpg" alt=""/>
                <figcaption>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </figcaption>
              </figure>
            </a>
            <a href="https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/placeimg02.jpg">
              <figure>
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/placeimg02.jpg" alt=""/>
                <figcaption>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, ut labore et dolore magna aliqua
                </figcaption>
              </figure>
            </a>
            <a href="https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/placeimg03.jpg">
              <figure>
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/placeimg03.jpg" alt=""/>
                <figcaption>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, ut labore et dolore magna aliqua
                </figcaption>
              </figure>
            </a>
            <a href="https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/placeimg04.jpg">
              <figure>
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/placeimg04.jpg" alt=""/>
                <figcaption>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </figcaption>
              </figure>
            </a>
            <a href="https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/placeimg05.jpg">
              <figure>
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/placeimg05.jpg" alt=""/>
                <figcaption>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, ut labore et dolore magna aliqua
                </figcaption>
              </figure>
            </a>
            <a href="https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/placeimg06.jpg">
              <figure>
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/placeimg06.jpg" alt=""/>
                <figcaption>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </figcaption>
              </figure>
            </a>
            <a href="https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/placeimg07.jpg">
              <figure>
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/placeimg07.jpg" alt=""/>
                 <figcaption>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, ut labore et dolore magna aliqua
                </figcaption>
              </figure>
            </a>
            <a href="https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/placeimg08.jpg">
              <figure>
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/placeimg08.jpg" alt=""/>
                <figcaption>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </figcaption>
              </figure>
            </a>
            <a href="https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/placeimg09.jpg">
              <figure>
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/placeimg09.jpg" alt=""/>
                <figcaption>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </figcaption>
              </figure>
            </a>
            <a href="https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/placeimg10.jpg">
              <figure>
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/placeimg10.jpg" alt=""/>
                <figcaption>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </figcaption>
              </figure>
            </a>
          </div>
        </Grid>
      </div>
    );
  }
}
