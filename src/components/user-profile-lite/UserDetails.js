import React, { useState, useEffect } from "react";
import ImageUploader from 'react-images-upload';
import { storage } from '../Firebase/firebase';
import PropTypes from "prop-types";
import {
  Button,
  Card, FormGroup, InputGroup
} from "shards-react";
import { auth } from "../Firebase/firebase";

function UserDetails(props) {

  const [file, setFile] = useState('')
  const [pathFile, setPath] = useState(auth.currentUser.photoURL)

  const handleFile = (e) => {
    const url = e.target.files[0]
    setFile(e.target.files[0])
    if (url) {
      var path = (window.URL || window.webkitURL).createObjectURL(url)
      setPath(path)
      const data = {
        url: url.name,
        file: url
      }
      props.getProfilePath(data)
    }
  }

  return (
    <Card small className="mb-4">
      <img style={{paddingLeft:"20px",paddingRight:"20px",paddingTop:"20px",paddingBottom:"20px", width:"100%",alignSelf:"center"}} src={pathFile} />
      <label className="custom-file-upload" type="file-upload" style={{textAlign:"center"}}
        for="file-upload" >Change image</label>
      <input name='pathFile' id="file-upload" type="file"
        style={{ display: 'none' }}
        onChange={(e) => handleFile(e)}
      />
    </Card>
  );
}

UserDetails.propTypes = {
  /**
   * The user details object.
   */
  userDetails: PropTypes.object
};

UserDetails.defaultProps = {
  userDetails: {
    name: "Sierra Brooks",
    avatar: require("./../../images/avatars/0.jpg"),
    jobTitle: "Project Manager",
    performanceReportTitle: "Workload",
    performanceReportValue: 74,
    metaTitle: "Description",
    metaValue:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eaque, quidem, commodi soluta qui quae minima obcaecati quod dolorum sint alias, possimus illum assumenda eligendi cumque?"
  }
};

export default UserDetails;
