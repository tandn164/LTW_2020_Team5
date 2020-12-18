import React from "react";
import { getContestsDocument } from "../components/Firebase/firebase"
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Button,
} from "shards-react";

import { Link } from 'react-router-dom';
import PageTitle from "../components/common/PageTitle";

class Ranks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contest: [],
      feedbackData: [],
    };
  }

  async componentDidMount() {
    const res = await this.getContest()
    this.setState({
      ...this.state,
      contest: res
    })
  }

  content = () => {
    let show;
    {
      if (this.state.contest.length > 0) {
        show = this.state.contest.map((value, idx) => (
          <Col lg="3" md="6" sm="12" className="mb-4" key={idx}>
            <Card small className="card-post card-post--1">
              <div
                className="card-post__image">
                <CardBody>
                    <Row style={{paddingLeft:"12px"}}>
                    <h5 className="card-title" style={{width:"60%"}}>
                  <a href="#" className="text-fiord-blue">
                    {value.title}
                  </a>
                </h5>
                <h6 style={{textAlign:"right", flex:"1"}}>
                    {value.time ? value.time : "unlimit time"}
                </h6>
                    </Row>
                <h6>
                <a href="#" className="text-fiord-blue">
                    {value.description}
                  </a>
                </h6>
                <span className="text-muted">Level: {value.type}</span>
              </CardBody>
              </div>
              <div style={{alignSelf:"flex-end", paddingRight:"20px", paddingBottom:"10px"}}>
                  <Button onClick= {()=>{
                      this.props.history.push({
                        pathname: '/rank-detail',
                        contestID: value.id
                    })
                  }}> Do Test
                  </Button>
                </div>
            </Card>
          </Col>
        ))
      }
    }

    return show;
  }

  getContest = async () => {
    const contest = await getContestsDocument()
    return contest
  }

  render() {
    return (
      <Container fluid className="main-content-container px-4">
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="Ranking" className="text-sm-left" />
        </Row>
        <Row>
          {this.content()}
          
        </Row>
      </Container>
    );
  }
}

export default Ranks;
