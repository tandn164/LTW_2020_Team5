import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";

import {
    ListGroupItem,
    Row,
    FormInput,
    Button
} from "shards-react";
import { newReply } from "../Firebase/firebase";

function FeedBackFormEditableForm(props) {
    const [userName, setUserName] = useState(props.userName)
    const [feedback, setFeedback] = useState(props.feedback)
    const [feedbackID, setFBID] = useState(props.feedbackID)
    const [contestID, setCID] = useState(props.contestID)
    const [reply, setReply] = useState("")

    const onChangeHandler = (event) => {
        const { name, value } = event.currentTarget;
        setReply(value)
    };

    return (
        <div style={{ paddingLeft: "20px", paddingTop: "20px", paddingRight: "20px" }}>
            <ListGroupItem className="p-3">
                <div>
                    <p>
                        <label className="content-question">
                            {userName} : {feedback}
                        </label>
                    </p>
                    <Row style={{paddingLeft:"15px", paddingRight:"20px"}}>
                        <label>
                            Reply :  
                        </label>
                        <div style={{width:"15px"}}></div>
                        <FormInput
                        style={{flex:"1"}}
                            id="feEmail"
                            placeholder="Reply"
                            onChange = {(event) => onChangeHandler(event)}
                        />
                    </Row>
                    <div style={{ alignSelf: "center", paddingRight: "20px"}}>
                    <Button onClick = {() => {
                        newReply(reply,contestID,feedbackID)
                        props.history.push(
                            {
                                pathname : "/contest-detail",
                                contestID: contestID
                            }
                        )
                    }}>
                        Reply
                    </Button>
                    </div>
                </div>
            </ListGroupItem>
        </div>
    )
}

export default withRouter(FeedBackFormEditableForm)