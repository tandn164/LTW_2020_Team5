import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormGroup,
  FormInput,
  FormSelect,
  FormTextarea,
  Button
} from "shards-react";
import { auth, getUserDocument, getUserInfo } from "../Firebase/firebase";

function UserAccountDetails(props) {

  const [userName, setUserName] = useState(props.userInfo.displayName)
  const [email, setEmail] = useState(props.userInfo.email)
  //const [password, setPassword] = useState(props.userInfo.password)
  const [city, setCity] = useState(props.userInfo.city)
  const [description, setDes] = useState(props.userInfo.description)

  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;

    if (name === 'userName') {
      setUserName(value);
    }
    else if (name === 'email') {
      setEmail(value);
    }
    // else if (name === "password") {
    //   setPassword(value);
    // }
    else if (name === "city") {
      setCity(value)
    }
    else if (name === "description") {
      setDes(value)
    }
  };

  const handleSubmit = () => {
    const data = {
      userName: userName,
      email: email,
   //   password: password,
      description: description,
      city: city
    }
    props.getUserProfile(data)
  }

  return (
  <Card small className="mb-4">
    <CardHeader className="border-bottom">
      <h6 className="m-0">{"Profile"}</h6>
    </CardHeader>
    <ListGroup flush>
      <ListGroupItem className="p-3">
        <Row>
          <Col>
            <Form className="fix-align-user-profile">
              <Row form>
                {/* First Name */}
                <Col className="form-group">
                  <label htmlFor="feFirstName">User name</label>
                  <FormInput
                    id="feFirstName"
                    placeholder="First Name"
                    name="userName"
                    value={userName}
                    onChange={(event) => onChangeHandler(event)}
                  />
                </Col>
              </Row>
              <Row form>
                {/* Email */}
                <Col className="form-group">
                  <label htmlFor="feEmail">Email</label>
                  <FormInput
                    type="email"
                    id="feEmail"
                    placeholder="Email Address"
                    value={email}
                    name="email"
                    onChange={(event) => onChangeHandler(event)}
                    autoComplete="email"
                  />
                </Col>
                {/* Password */}
                {/* <Col md="6" className="form-group">
                  <label htmlFor="fePassword">Password</label>
                  <FormInput
                    type="password"
                    id="fePassword"
                    placeholder="Password"
                    value={password}
                    name="password"
                    onChange={(event) => onChangeHandler(event)}
                    autoComplete="current-password"
                  />
                </Col> */}
              </Row>
              <FormGroup>
                <label htmlFor="feAddress">City</label>
                <FormInput
                  id="feAddress"
                  placeholder="Address"
                  value={city}
                  name="city"
                  onChange={(event) => onChangeHandler(event)}
                />
              </FormGroup>
              <Row form>
                <Col md="12" className="form-group">
                  <label htmlFor="feDescription">Description</label>
                  <FormTextarea id="feDescription" rows="5" value={description} name="description" onChange={(event) => onChangeHandler(event)}/>
                </Col>
              </Row>
              <Button theme="accent" onClick={() => {
                handleSubmit()
              }}>Update Account</Button>
            </Form>
          </Col>
        </Row>
      </ListGroupItem>
    </ListGroup>
  </Card>
  );
}

export default UserAccountDetails;
