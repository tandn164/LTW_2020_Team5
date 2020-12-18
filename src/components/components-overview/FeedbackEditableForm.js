import React, { useState } from "react";

import {
    ListGroupItem,
    Row,
    FormInput,
    Button
} from "shards-react";
import SmallButtons from "./SmallButtons";

export default function FeedBackFormEditableForm(props) {
    const [userName, setUserName] = useState(props.userName)
    const [feedback, setFeedback] = useState(props.feedback)
    const [reply, setReply] = useState(props.reply)

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
                            type="email"
                            id="feEmail"
                            placeholder="Reply"
                            name="email"
                            onChange={() => { }}
                        />
                    </Row>
                    <div style={{ alignSelf: "center", paddingRight: "20px"}}>
                    <Button>
                        Reply
                    </Button>
                    </div>
                </div>
            </ListGroupItem>
        </div>
    )
}