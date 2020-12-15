
import React, { Component, useState } from 'react';
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


function TestProcessing() {
    const [data, setData] = useState([{
        question: "abcd",
        answer: ["Aa", "Bb", "Cc", "Dd"],
        correctAnswer: "A"
    },
    {
        question: "abc1",
        answer: ["A", "B", "C", "D"],
        correctAnswer: "C"
    },
    {
        question: "abc2",
        answer: ["A", "B", "C", "D"],
        correctAnswer: "C"
    },
    {
        question: "abc3",
        answer: ["A", "B", "C", "D"],
        correctAnswer: "C"
    },
    {
        question: "abc4",
        answer: ["A", "B", "C", "D"],
        correctAnswer: "C"
    },
    {
        question: "abc5",
        answer: ["A", "B", "C", "D"],
        correctAnswer: "C"
    },
    {
        question: "abc6",
        answer: ["A", "B", "C", "D"],
        correctAnswer: "C"
    },
    {
        question: "abc7",
        answer: ["A", "B", "C", "D"],
        correctAnswer: "C"
    }])
    let listAnswer = [...Array(10)];
    const getUserAnswer = (data) => {
        if (listAnswer[data.question] != data.answer) {
            listAnswer.splice(data.question, 1, data.answer)
        }
    }
    const handleSubmit = () => {
        console.log(listAnswer);
    }
    function content() {
        let show;
        if (data.length > 0) {
            show = data.map((value, idx) => {
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
            <div>
                <Button onClick={() => handleSubmit()}>Submit</Button>
            </div>
        </>
    )

}

export default TestProcessing