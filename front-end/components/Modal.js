// frontend/src/components/Modal.js

import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  Label
} from "reactstrap";

export default class UploadCSV extends Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fileInput = React.createRef();
    // this.state = {
    //   activeItem: this.props.activeItem
    // };
  }

  handleSubmit(event) {
    event.preventDefault();
    // e.preventDefault();
    console.log("handling submit2222222");
    console.log(this.fileInput.current.files);
    // this.props.fileInput = this.fileInput.current.files[0]
    this.props.onSubmit(this.fileInput.current.files[0]);
  };

  render() {
    // const { onSubmit } = this.props;
    return (
      <Form enctype="multipart/form-data" onSubmit={this.handleSubmit}>
            <FormGroup>
              <div class="form-group">
                <label
                  for="name"
                >
                  File:{" "}
                </label>
                <div class="col-md-8">
                  <input
                    type="file"
                    name="csv_file"
                    id="csv_file"
                    required="True"
                    class="form-control"
                    ref={this.fileInput}
                  />
                </div>
              </div>
              <input type="submit" value="Submit" />
            </FormGroup>
          </Form>
          /* <Button color="success" onClick={() => onSave(this.state.activeItem)}>
            Save
          </Button> */
    );
  }
}
