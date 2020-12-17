import React, { useEffect, useState } from "react";

import {
  ListGroup,
  ListGroupItem,
  Row,
  FormRadio,
  Col,
  Form,
  FormInput,
  FormGroup,
  FormCheckbox,
  FormSelect,
  Button
} from "shards-react";

export default function CompleteFormExample(props) {
  const [isChecked, setCheck] = useState()
  const [question, setQuestion] = useState(props.data.question)
  const [index, setIndex] = useState(props.index)
  const [answer, setAnswer] = useState(props.data.answer)
  const [correctAnswer, setCorrect] = useState(props.data.correctAnswer)

  useEffect(() => {
  }, [isChecked])

  const handleChange = (event) => {
    setCheck(event+index)
    const data = {
      question: index,
      answer: event
    }
    props.getUserAnswer(data)
  }

  return (
    <div style={{paddingLeft:"20px", paddingTop: "20px", paddingRight: "20px"}}>
      <ListGroupItem className="p-3">
        <div className="wrap-question">
          <label className="content-question">
            Câu {parseInt(index)+1}: {question}
          </label>
          <div className="wrap-answer">
            {(answer.length > 0) ? (
              answer.map((value, i) => {
                return (
                  <FormRadio
                    name={value+index}
                    checked={isChecked === value+index}
                    onChange={() => {
                      handleChange(value)
                    }}>
                    {value}
                  </FormRadio>
                )
              })) : ('')}
          </div>

        </div>
      </ListGroupItem>
    </div>
  )
}