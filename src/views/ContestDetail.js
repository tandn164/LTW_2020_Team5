import React, { useState, useEffect } from "react";
import { Link, useHistory, withRouter } from "react-router-dom";
import { Container, Row, Col, Card, CardHeader, CardBody,CardImg } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import FeedBackFormEditableForm from "../components/components-overview/FeedbackEditableForm";
import FeedBackForm from "../components/components-overview/FeedBackForm"
import { getFeedback, getRankDetail } from '../components/Firebase/firebase';

function ContestDetail (props) {
    const [rankData, setData] = useState(null)
    const [feedbackData, setFeedback] = useState(null)

    const getRankList = async(contestID) => {
        const rankList = await getRankDetail(contestID)
        setData(rankList)
    }

    const getFeedbackList = async(currentContestID) => {
        const feedback = await getFeedback(currentContestID)
        setFeedback(feedback)
    }

    useEffect(() => {
        if (!rankData) {
            getRankList(props.location.contestID)
        }
        if (!feedbackData) {
            getFeedbackList(props.location.contestID)
        }
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

    function feedbackContent() {
        let show;
        if (feedbackData && feedbackData.length > 0) {
            show = feedbackData.map((value, idx) => {
                if (value.reply && value.reply != "") {
                    return (
                        <FeedBackForm
                            userName={value.userName} 
                            feedback={value.message}
                            reply={value.reply}
                        />)
                } else {

                    return (
                        <FeedBackFormEditableForm
                            userName={value.userName} 
                            feedback={value.message}
                            feedbackID = {value.id}
                            contestID = {props.location.contestID}
                        />
                    )
                }
                
            })
            return show
        }
    }

    function feedbackTable() {
        return (
            <CardBody className="p-0 pb-3">
      <Row noGutters className="page-header py-4">
        <PageTitle
          sm="4"
          title="Feedback"
          className="text-sm-left"
        />
      </Row>
        <>
            {feedbackContent()}
        </>
        </CardBody>
        );
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
    {feedbackTable()}
  </Container>);
};

export default withRouter(ContestDetail);
