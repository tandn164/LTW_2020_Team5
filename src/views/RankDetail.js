import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, CardHeader, CardBody,CardImg } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import { getRankDetail } from '../components/Firebase/firebase';

function Rank (props) {
    const [rankData, setData] = useState(null)

    const getRankList = async(contestID) => {
        const rankList = await getRankDetail(contestID)
        setData(rankList)
    }

    useEffect(() => {
        if (!rankData) {
            getRankList(props.location.contestID)
        }
        console.log(rankData);
    });

    function content() {
        let show;
        if (rankData && rankData.length > 0) {
            show = rankData.map((value, idx) => {
                return (
                    <tr class="center">
                  <td> {idx+1}</td>
                  <td> <CardImg 
                    className="user-avatar fix-img-table"
                    src={value.urlProfile}
                    alt="User Avatar">
                  </CardImg> </td>
                  <td>{value.displayName}</td>
                  <td>{value.city}</td>
                  <td> {value.point} </td>
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
                {content()}
              </tbody>
            </table>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Container>);
};

export default Rank;
