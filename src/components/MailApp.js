import React from "react";
import { connect } from "react-redux";
import "semantic-ui-css/semantic.min.css";
import { Divider, Grid, Search } from "semantic-ui-react";

import MessageList from "./MessageList";
import PersonDetail from "./PersonDetail";
import { getMessages, getPerson } from "../redux/selectors/messages";
import {
  requestMessages,
  requestPersonDetail
} from "../redux/modules/messages";

class MailApp extends React.Component {
  componentWillMount() {
    this.props.requestMessages();
  }
  render() {
    return (
      <Grid divided>
        <Grid.Row columns={2}>
          <Grid.Column width={4}>
            <PersonDetail person={this.props.person} />
          </Grid.Column>
          <Grid.Column width={10}>
            <Search />
            <Divider />
            <MessageList
              messages={this.props.messages}
              handleOnClick={this.props.requestPersonDetail}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  messages: getMessages(state),
  person: getPerson(state)
});

const mapDispatchToProps = {
  requestPersonDetail,
  requestMessages
};

export default connect(mapStateToProps, mapDispatchToProps)(MailApp);
