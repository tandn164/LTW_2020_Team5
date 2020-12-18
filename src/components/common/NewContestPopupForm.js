import React from "react";
import { Modal, ModalBody, ModalFooter } from "shards-react";
 import {
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormGroup,
  FormInput,
  FormSelect,
  FormTextarea,
  Button
} from "shards-react";
import CustomSelect from "../components-overview/CustomSelect";
import {AddCircleOutline, RemoveCircleOutline} from "@material-ui/icons"
import QuestionForm from "./QuestionForm";
import { newContest } from "../Firebase/firebase";

export default class NewContestPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      title:"",
      description:"",
      type:"",
      questionList: [{
        id:generateRandomCode(6),
        question: "",
        answer: [],
        correctAnswer: ""
      },],
      listQuestionDelete:[]
     };
  }

addMoreUniMovie = (e) => {
    let unique = generateRandomCode(6);
    let data = [...this.state.questionList];
    data.push({ question:"", answer:[],correctAnswer:"",id:unique });
    this.setState(
      {
        ...this.state,
        questionList: data
      }
    )
}

getFormData = (data, index) => {
  let questionList = [...this.state.questionList];
  questionList[index] = data;
  this.setState({
    ...this.state,
    questionList: questionList
  })
}

onChangeHandler = (event) => {
  const { name, value } = event.currentTarget;
  if (name === 'title') {
    this.setState({
      ...this.state,
      title:value
    })
  }
  else if (name === 'description') {
    this.setState({
      ...this.state,
      description:value
    })
  }
  else if (name === "level") {
    this.setState({
      ...this.state,
      type:value
    })
  }
};

handleUniMovie = (e, index) => {
    e = window.event || e;
    e.preventDefault();
    let questionList = [...questionList];
    questionList[index].question = e.target.value;
}

removeUniMovie = (e, index) => {
    e.preventDefault();
    let data = [...this.state.questionList];
    if (data[index].id) {
        let questionsDel = [...this.state.listQuestionDelete];
        questionsDel.push(data[index].id);
        this.setState({
          ...this.state,
          listQuestionDelete: questionsDel
        })
    }
    let datafilter = data.filter((_item, key) => {
        if (key !== index) {
            return true;
        }
        return false;
    });
    this.setState({
      ...this.state,
      questionList:datafilter
    })
};

  render() {
    return (
      <Col lg="10" style={{paddingTop:"20px"}}>
          <Card>
      <CardHeader className="border-bottom">
              <h6 className="m-0">New contest</h6>
            </CardHeader>
            <ListGroup flush>
          <Form style={{padding:"10px"}}>
              <Row style={{width:"100%"}}>
                {/* First Name */}
                <Col className="form-group" sm="12" md="4" lg="3">
                  <label style={{paddingTop:"7px"}} >Title</label>
                </Col>
                <Col className="form-group" sm="12" md="8" lg="9">
                  <FormInput
                    id="feFirstName"
                    placeholder="Contest title"
                    name="title"
                    onChange = {(event) => this.onChangeHandler(event)}
                  />
                </Col>
              </Row>
              <Row style={{width:"100%"}}>
                {/* First Name */}
                <Col className="form-group" sm="12" md="4" lg="3">
                  <label style={{paddingTop:"7px"}} >Description</label>
                </Col>
                <Col className="form-group" sm="12" md="8" lg="9">
                  <FormInput
                    id="feFirstName"
                    placeholder="Contest description"
                    name="description"
                    onChange = {(event) => this.onChangeHandler(event)}
                  />
                </Col>
              </Row>
              <Row style={{width:"100%"}}>
                {/* First Name */}
                <Col className="form-group" sm="12" md="4" lg="3">
                  <label style={{paddingTop:"7px"}} >Level</label>
                </Col>
                <Col className="form-group" sm="12" md="8" lg="9">
                <FormInput
                    id="feFirstName"
                    placeholder="Contest Level"
                    name="level"
                    onChange = {(event) => this.onChangeHandler(event)}
                  />
                </Col>
              </Row>
              <Row style={{alignSelf:"flex-start", width:"100%"}}>
              <FormGroup style={{paddingLeft:"50px", width:"100%"}}>
                        <p className='label-uniMovies-in-character' >Question List</p>
                        <div style={{width:"100%"}}>
                            {this.state.questionList.map((item, idx) => {
                                return (
                                    <div style={{ display: 'flex', paddingBottom: '10px', width:"100%" }}>
                                        <QuestionForm
                                          getFormData={(data) => this.getFormData(data, idx)}
                                        >
                                        </QuestionForm>
                                        <div style={{ paddingLeft: '30px' }}>  <AddCircleOutline
                                            style={{ cursor: "pointer" }}
                                            onClick={() => this.addMoreUniMovie()}
                                        />
                                            {this.state.questionList.length > 1 && (
                                                <RemoveCircleOutline
                                                    style={{ cursor: "pointer" }}
                                                    onClick={(e) => this.removeUniMovie(e, idx)}
                                                />
                                            )}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </FormGroup>
              </Row>
            </Form>
            <Button onClick = {() => {
              newContest(this.state.title, this.state.description,this.state.type,this.state.questionList)
            }} style={{alignSelf:"center"}}>
              Add question
            </Button>
      </ListGroup>
      </Card>
        </Col>
    );
  }
}

export const generateRandomCode = (l = 5) => {
  let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let charsLength = chars.length;
  let string = "";

  for (let i = 0; i < l; i++)
    string += chars.charAt(Math.floor(Math.random() * charsLength));

  return `${string}`;
}