import React, { useState } from "react";

import {
  ListGroupItem,
} from "shards-react";

export default function FeedBackForm(props) {
  const [userName, setUserName] = useState(props.userName)
  const [feedback, setFeedback] = useState(props.feedback)
  const [reply, setReply] = useState(props.reply)

  return (
    <div style={{paddingLeft:"20px", paddingTop: "20px", paddingRight: "20px"}}>
      <ListGroupItem className="p-3">
        <div className="wrap-question">
        <p>
          <label className="content-question">
            {userName} : {feedback}
          </label>
        </p>
          <label className="content-question">
            Reply : {reply}
          </label>
        </div>
      </ListGroupItem>
    </div>
  )
}