import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { Container, Row, Col, Card, CardHeader, CardBody,CardImg, Button } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import {  getListUser } from '../components/Firebase/firebase';

function UserDashboard () {
    const [userData, setData] = useState(null)

    const getUserData = async() => {
        const userList = await getListUser()
        setData(userList)
    }

    useEffect(() => {
        if (!userData) {
            getUserData()
        }
    });

    function content() {
        let show;
        if (userData && userData.length > 0) {
            show = userData.map((value, idx) => {
                return (
                    <tr class="center">
                  <td> {idx+1}</td>
                  <td> <CardImg 
                    className="user-avatar fix-img-table"
                    src={value.urlProfile}
                    alt="User Avatar">
                  </CardImg> </td>
                  <td>{value.email}</td>
                  <td>{value.displayName}</td>
                  <td>{value.city}</td>
                  <td> {value.description} </td>
                  <td> 
                      <Col>
                      <Row>
                      <Button>Resend Password</Button>  
                      </Row>
                      <Row>
                      <Button theme="danger">Delete</Button> 
                      </Row>
                      </Col>  
                  </td>
                </tr>
                )
            })
        }
        return show;
    }

    return (
  <Container fluid className="main-content-container px-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle sm="4" title="User Dashboard" className="text-sm-left" />
    </Row>
    {/* Default Light Table */}
    <Row>
      <Col>
        <Card small className="mb-4">
          <CardHeader className="border-bottom">
            <div className="m-2"> </div>
          </CardHeader>
          <CardBody className="p-0 pb-3">
            <table className="table mb-0">
              <thead className="bg-light">
                <tr>
                  <th scope="col" className="border-0">
                    STT
                  </th>
                  <th scope="col" className="border-0">
                    Avatar
                  </th>
                  <th scope="col" className="border-0">
                    Email
                  </th>
                  <th scope="col" className="border-0">
                    UserName
                  </th>
                  <th scope="col" className="border-0">
                    City
                  </th>
                  <th scope="col" className="border-0">
                    Description
                  </th>
                  <th scope="col" className="border-0">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {content()}
              </tbody>
            </table>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Container>);
};

export default withRouter(UserDashboard);
