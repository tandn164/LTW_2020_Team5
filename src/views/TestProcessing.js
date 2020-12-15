
import React, { Component, useState, useEffect } from 'react';
import {
    Container,
    Row,
    Col,
    Card,
    CardHeader,
    ListGroup,
    ListGroupItem,
    Form,
    Alert,
    Button
} from "shards-react";
import CompleteFormExample from '../components/components-overview/CompleteFormExample';
import { getQuestionList } from '../components/Firebase/firebase';

function TestProcessing(props) {
    const [answerData, setData] = useState(null)
    const [listAnswer, setListAnswer] = useState(null)

    const getUserAnswer = (data) => {
        if (listAnswer[data.question] != data.answer) {
            listAnswer.splice(data.question, 1, data.answer)
        }
    }

    const getQuestions = async(contestID) => {
        const questionList = await getQuestionList(contestID)
        setData(questionList)
        setListAnswer([...Array(questionList.length)])
        return questionList
    }

    useEffect(()=>{
       if (!answerData) {
        getQuestions(props.location.questionsProp)
       }

    })

    const handleSubmit = () => {
        console.log(listAnswer);
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
        <>
            {content()}
            <div style={{textAlign: "center"}}>
                <Button onClick={() => handleSubmit()}>Submit</Button>
            </div>
        </>
    )
}

export default TestProcessing