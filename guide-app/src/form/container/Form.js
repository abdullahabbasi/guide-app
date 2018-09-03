import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Grid, Row, Col} from 'react-bootstrap'

class Form extends Component {

  render() {
    return (
      <div>
        <Grid>
          <Row style={{height: '300px'}}>
            <Col xs={3}>
              <div style={ {backgroundColor: 'red'} }></div>
            </Col>
            <Col xs={9}>
              <div style={ {backgroundColor: 'green'} }></div>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}


const connectComponent = connect(null, null);
export default connectComponent(Form);
