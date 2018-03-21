import React from "react";
import {connect} from "react-redux";
import "semantic-ui-css/semantic.min.css";
import {Container} from "semantic-ui-react";

import MessageList from "./MessageList";
import PersonDetail from "./PersonDetail";
import {getMessages, getPerson} from "../redux/selectors/messages";
import {
    requestMessages,
    requestPersonDetail
} from "../redux/modules/messages";

class MailApp extends React.Component {
    componentWillMount() {
        this.props.requestMessages(1);
    }

    render() {
        return (
            <Container>
                <div className="wrapper">
                    <input className="search" type="search"/>
                    <PersonDetail person={this.props.person}/>
                    <MessageList
                        messages={this.props.messages}
                        handleOnClick={this.props.requestPersonDetail}
                        handleLoadMore={() => {
                            console.log('aca');
                            this.props.requestMessages(this.props.start)
                        }}
                    />
                </div>
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    messages: getMessages(state),
    person: getPerson(state),
    start: state.messages.start
});

const mapDispatchToProps = {
    requestPersonDetail,
    requestMessages
};

export default connect(mapStateToProps, mapDispatchToProps)(MailApp);
