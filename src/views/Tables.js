import React from "react";
import { Container, Row, Col, Card, CardHeader, CardBody,CardImg } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import avatar from "../images/avatars/0.jpg"

const Tables = () => (
  <Container fluid className="main-content-container px-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle sm="4" title="Top Players" subtitle="Results" className="text-sm-left" />
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
                    Rank
                  </th>
                  <th scope="col" className="border-0">
                    Avatar
                  </th>
                  <th scope="col" className="border-0">
                    UserName
                  </th>
                  <th scope="col" className="border-0">
                    City
                  </th>
                  <th scope="col" className="border-0">
                    Best Record
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="center">
                  <td> #1</td>
                  <td> <CardImg 
                    className="user-avatar rounded-circle mr-2 fix-img-table"
                    src={avatar}
                    alt="User Avatar">
                  </CardImg> </td>
                  <td>Kerry</td>
                  <td>Ha Noi</td>
                  <td> 180/180 </td>
                </tr>
                <tr class="center">
                  <td> #2</td>
                  <td> <CardImg 
                    className="user-avatar rounded-circle mr-2 fix-img-table"
                    src={avatar}
                    alt="User Avatar">
                  </CardImg> </td>
                  <td>Angela</td>
                  <td>Estonia</td>
                  <td> 180/180 </td>
                </tr>
                <tr class="center">
                  <td> #3</td>
                  <td> <CardImg 
                    className="user-avatar rounded-circle mr-2 fix-img-table"
                    src={avatar}
                    alt="User Avatar">
                  </CardImg> </td>
                  <td>Nathan</td>
                  <td>Cyprus</td>
                  <td>178/180</td>
                </tr>
                <tr class="center">
                  <td> #4</td>
                  <td> <CardImg 
                    className="user-avatar rounded-circle mr-2 fix-img-table"
                    src={avatar}
                    alt="User Avatar">
                  </CardImg> </td>
                  <td>Angela</td>
                  <td>Liberia</td>
                  <td> 175/180</td>
                </tr>
              </tbody>
            </table>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default Tables;
