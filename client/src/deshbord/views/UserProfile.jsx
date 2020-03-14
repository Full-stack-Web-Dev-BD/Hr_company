import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardText,
  FormGroup,
  Form,
  Input,
  Row,
  Col
} from "reactstrap";
import EditProfile from "./EditProfile";
import JWTDecoder from 'jwt-decode'
class UserProfile extends React.Component {
  constructor(){
    super()

  }
  
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col className="col-md-6 offset-md-3">
              <Card className="card-user">
                <CardBody>
                  <CardText />
                  <div className="author">
                    <div className="block block-one" />
                    <div className="block block-two" />
                    <div className="block block-three" />
                    <div className="block block-four" />
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <h5 className="title">
                        {window.localStorage.getItem('asci-token')?
                        JWTDecoder(window.localStorage.getItem('asci-token')).name:"Jack"
                        }
                      </h5>
                      
                      <h5 className="title">
                        {window.localStorage.getItem('asci-token')?
                        JWTDecoder(window.localStorage.getItem('asci-token')).email:"email@gmial.com"
                        }
                      </h5>
                    </a>
                    <p className="description">Ceo/Co-Founder</p>
                  </div>
                  <div className="card-description">
                    Do not be scared of the truth because we need to restart the
                    human foundation in truth And I love you like Kanye loves
                    Kanye I love Rick Owens’ bed design but the back is...
                  </div>
                </CardBody>
                <CardFooter>
                  <div className="button-container">
                    <Button className="btn-icon btn-round" color="facebook">
                      <i className="fab fa-facebook" />
                    </Button>
                    <Button className="btn-icon btn-round" color="twitter">
                      <i className="fab fa-twitter" />
                    </Button>
                    <Button className="btn-icon btn-round" color="google">
                      <i className="fab fa-google-plus" />
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row>
          {/* <Row>
            <Col className="col-md-6 offset-md-3">
              <Card className="card-user">
                <CardBody>
                  <EditProfile/>
                </CardBody>
              </Card>
            </Col>
          </Row> */}
        </div>
      </>
    );
  }
}

export default UserProfile;
