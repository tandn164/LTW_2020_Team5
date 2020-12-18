import React, { useState, useEffect } from 'react';
import {
    Button,
    Container,
    Row,
    CardImg,
    Col,
    Card,
    CardHeader,
    CardBody,
    FormTextarea
} from "shards-react";

import PageTitle from "../components/common/PageTitle";
import FeedBackForm from '../components/components-overview/FeedBackForm';
import { firestore, getFeedback, getRankDetail, newFeedback } from "../components/Firebase/firebase"

function Result(props) {
    const [result, setResult] = useState(props.location.state.result)
    const [total, setTotal] = useState(props.location.state.total)
    const [currentContestID, setContestID] = useState(props.location.state.currentContestID)
    const [rankData, setData] = useState(null)
    const [feedbackData, setFeedback] = useState(null)
    const [myFeedback, setDes] = useState(null)

    const onChangeHandler = (event) => {
        const { name, value } = event.currentTarget;
        setDes(value)
    };

    const handleSubmit = async () => {
        newFeedback(myFeedback, currentContestID) 
        const res = await getFeedbackList(currentContestID)
        props.history.push(({
            pathname: '/result',
            state:{
                result: result,
                total:total,
                currentContestID: currentContestID
            }
        }))
    }

    const getRankList = async (currentContestID) => {
        const rankList = await getRankDetail(currentContestID)
        setData(rankList)
    }

    const getFeedbackList = async (currentContestID) => {
        const feedback = await getFeedback(currentContestID)
        setFeedback(feedback)
    }

    useEffect(() => {
        if (!rankData) {
            getRankList(currentContestID)
        }
        if (!feedbackData) {
            getFeedbackList(currentContestID)
        }
    });

    function content() {
        let show;
        // if (answerData && answerData.length > 0) {
        //     show = answerData.map((value, idx) => {
        //         return (
        //             <CompleteFormExample
        //                 data={value} index={idx}
        //                 getUserAnswer={(data) => getUserAnswer(data)}
        //             />)
        //     })
        //     return show
        // }
    }

    function rankContent() {
        let show;
        if (rankData && rankData.length > 0) {
            show = rankData.map((value, idx) => {
                return (
                    <tr class="center">
                        <td> {idx + 1}</td>
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

    function rankTable() {
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
                                        {rankContent()}
                                    </tbody>
                                </table>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>);
    }

    function feedbackContent() {
        let show;
        if (feedbackData && feedbackData.length > 0) {
            show = feedbackData.map((value, idx) => {
                return (
                    <FeedBackForm
                        userName={value.userName}
                        feedback={value.message}
                        reply={value.reply}
                    />)
            })
            return show
        }
    }

    function feedbackTable() {
        return (
            <Container fluid className="main-content-container px-4">
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
            </Container>
        );
    }

    function addFeedbackForm() {
        return (
            <div>
                <Row form>
                    <Col md="12" className="form-group">
                        <label htmlFor="feDescription">New Feedback</label>
                        <FormTextarea id="feDescription" rows="5" value={myFeedback} name="feedback" onChange={(event) => onChangeHandler(event)} />
                    </Col>
                </Row>
                <Button theme="accent" onClick={() => {
                    handleSubmit()
                }}>Feedback</Button>
            </div>
        );
    }

    function feedbackContainer() {
        return (
            <Container fluid className="main-content-container px-4">
                <Row noGutters className="page-header py-4">
                    <PageTitle
                        sm="4"
                        className="text-sm-left"
                    />
                </Row>
                <>
                    {addFeedbackForm()}
                </>
            </Container>
        );
    }

    return (
        <Container fluid className="main-content-container px-4">
            <Row noGutters className="page-header py-4">
                <PageTitle
                    sm="4"
                    title={`Your result is ${result ? result : 0}/${total ? total : 0}`}
                    className="text-sm-center"
                    textAlign="center"
                />
            </Row>
            <>
                {rankTable()}
                {feedbackTable()}
                {feedbackContainer()}
                {content()}
            </>
        </Container>
    )
}

export default Result