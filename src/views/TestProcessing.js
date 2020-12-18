import React, { useState, useEffect } from 'react';
import {
    Button,
    Container,
    Row,
} from "shards-react";

import PageTitle from "../components/common/PageTitle";
import CompleteFormExample from '../components/components-overview/CompleteFormExample';
import { auth, getQuestionList,updateUserResult } from '../components/Firebase/firebase';

function TestProcessing(props) {
    const [answerData, setData] = useState(null)
    const [listAnswer, setListAnswer] = useState(null)
    const [contestTitle, setTitle] = useState(props.location.title)
    const [contestLevel, setLevel] = useState(props.location.level)

    const getUserAnswer = (data) => {
        if (listAnswer[data.question] != data.answer) {
            listAnswer.splice(data.question, 1, data.answer)
        }
    }

    const getQuestions = async(contestID) => {
        const questionList = await getQuestionList(contestID)
        setData(questionList)
        setListAnswer([...Array(questionList ? questionList.length : 0)])
    }

    useEffect(()=>{
       if (!answerData) {
        getQuestions(props.location.questionsProp)
       }
    })

    const handleSubmit = () => {
        console.log(listAnswer);
        let result = 0;
        var i;
        console.log(answerData);
        if (!answerData) return;
        for (i = 0; i< answerData.length ; i++) {
            console.log("13",answerData[i].correctAnswer);
            if (listAnswer[i] == answerData[i].correctAnswer) {
                result += 1;
            }
        }
        if (!auth.currentUser) {
            return;
        }
        updateUserResult(props.location.questionsProp,result)
        props.history.push({
            pathname: '/result',
            state: { result:result, total:answerData ? answerData.length : 0, currentContestID: props.location.questionsProp}
        })
    }

    function content() {
        let show;
        if (answerData && answerData.length > 0) {
            show = answerData.map((value, idx) => {
                return (
                    <CompleteFormExample
                        data={value} index={idx}
                        getUserAnswer={(data) => getUserAnswer(data)}
                    />)
            })
            return show
        }
    }

    return (
        <Container fluid className="main-content-container px-4">
      <Row noGutters className="page-header py-4">
        <PageTitle
          sm="4"
          title={`${contestTitle ? contestTitle : ""}`}
          subtitle={`Level: ${contestLevel ? contestLevel : ""}`}
          className="text-sm-left"
        />
      </Row>

        <>
            {content()}
            <div style={{textAlign: "center"}}>
                <Button onClick={() => handleSubmit()}>Submit</Button>
            </div>
        </>
        </Container>
    )
}

export default TestProcessing