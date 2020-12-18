import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import UserDetails from "../components/user-profile-lite/UserDetails";
import UserAccountDetails from "../components/user-profile-lite/UserAccountDetails";
import { auth, storage, updateUserInfo, getUserDocument } from "../components/Firebase/firebase";

function UserProfileLite(){

  const [photoURL, setURL] = useState(auth.currentUser.uid)
  const [image, setImage] = useState(null);
  const [profile, setProfile] = useState(null)

  const getProfilePath = (data) => {
    setURL(data.url)
    setImage(data.file)
  }

  const getUserProfile = (data) => {
    var storageRef = storage.ref()
    var imageRef = storageRef.child(photoURL)
    
    imageRef.put(image).then(function(snapshot) {
      storage.ref().child(photoURL).getDownloadURL().then(url => {
        console.log(url);
        auth.currentUser.updateProfile({
          photoURL:url
        }).then(function() {updateUserInfo(data.userName,data.email,data.city,url,data.description)})
      });
    })
  }

  const getUserInfo = async () => {
    if (auth.currentUser) {
      const userInfo = await getUserDocument(auth.currentUser.uid)
      setProfile(userInfo)
    }
  }

  useEffect(()=>{
    if (!profile) {
      getUserInfo()
    }
  },[])

  function content() {
    let show;
    if( profile) {
      show = (
      <Container fluid className="main-content-container px-4">
      <Row noGutters className="page-header py-4">
        <PageTitle title="User Profile" subtitle="Overview" md="12" className="ml-sm-auto mr-sm-auto" />
      </Row>
      <Row>
        <Col lg="4">
          <UserDetails getProfilePath={(data) => getProfilePath(data)} />
        </Col>
        <Col lg="8">
          <UserAccountDetails getUserProfile={(data) => getUserProfile(data)} userInfo={profile} />
        </Col>
      </Row>
    </Container>);
    }
    return show
  }

  return (
    <>
    {content()}
    </>
  )
}

export default UserProfileLite;
