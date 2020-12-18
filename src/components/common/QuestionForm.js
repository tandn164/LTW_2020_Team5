import React, { useState } from "react";

 import {
  Row,
  Col,
  Form,
  FormInput,
} from "shards-react";

export default function QuestionForm(props) {
  const [question, setQuestion] = useState("")
  const [correctAnswer, setCorrectAnswer] = useState("")
  const [answer1, setAnswer1] = useState("")
  const [answer2, setAnswer2] = useState("")
  const [answer3, setAnswer3] = useState("")
  const [answer4, setAnswer4] = useState("")

  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;
    if (name === 'question') {
      setQuestion(value);
    }
    else if (name === 'Correct Answer') {
      setCorrectAnswer(value);
    }
    else if (name === "Answer 1") {
      setAnswer1(value);
    }
    else if (name === "Answer 2") {
      setAnswer2(value);
    }
    else if (name === "Answer 3") {
      setAnswer3(value);
    }
    else if (name === "Answer 4") {
      setAnswer4(value);
    }
    const data = {
        question: question,
        correctAnswer: correctAnswer,
        answer1: answer1,
        answer2: answer2,
        answer3: answer3,
        answer4: answer4
      }
    props.getFormData(data)
   };

  return (
    <div style={{paddingTop: "20px",width:"100%"}}>
        <scroll>
      <Form style={{padding:"0px"}}>
              <Row style={{width:"100%"}}>
                {/* First Name */}
                <Col className="form-group" sm="12" md="4" lg="3">
                  <label style={{paddingTop:"7px"}} >Question</label>
                </Col>
                <Col className="form-group" sm="12" md="8" lg="9">
                  <FormInput
                    id="feFirstName"
                    placeholder="Question"
                    name="question"
                    value={question}
                    onChange={(event) => onChangeHandler(event)}
                  />
                </Col>
              </Row>
              <Row style={{width:"100%"}}>
                {/* First Name */}
                <Col className="form-group" sm="12" md="4" lg="3">
                  <label style={{paddingTop:"7px"}} >Correct Answer</label>
                </Col>
                <Col className="form-group" sm="12" md="8" lg="9">
                  <FormInput
                    id="feFirstName"
                    placeholder="Correct Answer"
                    name="Correct Answer"
                    value={correctAnswer}
                    onChange={(event) => onChangeHandler(event)}
                  />
                </Col>
              </Row>
              <Row style={{width:"100%"}}>
                {/* First Name */}
                <Col className="form-group" sm="12" md="4" lg="3">
                  <label style={{paddingTop:"7px"}} >Answer 1</label>
                </Col>
                <Col className="form-group" sm="12" md="8" lg="9">
                  <FormInput
                    id="feFirstName"
                    placeholder="Answer 1"
                    name="Answer 1"
                    value={answer1}
                    onChange = {(event) => onChangeHandler(event)}
                  />
                </Col>
              </Row>
              <Row style={{width:"100%"}}>
                {/* First Name */}
                <Col className="form-group" sm="12" md="4" lg="3">
                  <label style={{paddingTop:"7px"}} >Answer 2</label>
                </Col>
                <Col className="form-group" sm="12" md="8" lg="9">
                  <FormInput
                    id="feFirstName"
                    placeholder="Answer 2"
                    name="Answer 2"
                    value={answer2}
                    onChange={(event) => onChangeHandler(event)}
                  />
                </Col>
              </Row>
              <Row style={{width:"100%"}}>
                {/* First Name */}
                <Col className="form-group" sm="12" md="4" lg="3">
                  <label style={{paddingTop:"7px"}} >Answer 3</label>
                </Col>
                <Col className="form-group" sm="12" md="8" lg="9">
                  <FormInput
                    id="feFirstName"
                    placeholder="Answer 3"
                    name="Answer 3"
                    value={answer3}
                    onChange={(event) => onChangeHandler(event)}
                  />
                </Col>
              </Row>
              <Row style={{width:"100%"}}>
                {/* First Name */}
                <Col className="form-group" sm="12" md="4" lg="3">
                  <label style={{paddingTop:"7px"}} >Answer 4</label>
                </Col>
                <Col className="form-group" sm="12" md="8" lg="9">
                  <FormInput
                    id="feFirstName"
                    placeholder="Answer 4"
                    name="Answer 4"
                    value={answer4}
                    onChange={(event) => onChangeHandler(event)}
                  />
                </Col>
              </Row>
            </Form>
            </scroll>
    </div>
  )
}