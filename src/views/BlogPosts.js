import React from "react";
import { getContestsDocument } from "../components/Firebase/firebase"
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Badge,
} from "shards-react";

import { Link } from 'react-router-dom';
import PageTitle from "../components/common/PageTitle";

class BlogPosts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contest: [],
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
                className="card-post__image"
                style={{
                  // backgroundImage: `url(${post.backgroundImage})` 
                }}
                >
                <Badge
                  pill
                  className={`card-post__category bg-${value.title}`}
                >
                  {value.category}
                </Badge>
                  <div className="card-post__author d-flex">
                  <Link to={{pathname:"/test-processing",questionsProp: value.id, title:value.title, level: value.type}}>
                  <a
                    href="#"
                    className="card-post__author-avatar card-post__author-avatar--small"
                    style={{
                      // backgroundImage: `url('${post.authorAvatar}')` 
                    }}>
                    Written by
                      {value.numberOfQuestion}
                  </a>
                  </Link>
                </div>
              </div>
              <CardBody>
                <h5 className="card-title">
                  <a href="#" className="text-fiord-blue">
                    {value.title}
                  </a>
                </h5>
                <p className="card-text d-inline-block mb-3">{value.numberOfQuestion}</p>
                <span className="text-muted">{value.type}</span>
              </CardBody>
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
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="Contest and Exercise" className="text-sm-left" />
        </Row>
        <Row>
          {this.content()}
        </Row>
      </Container>
    );
  }
}

export default BlogPosts;
