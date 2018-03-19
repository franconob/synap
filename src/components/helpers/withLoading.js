import React from "react";
import { connect } from "react-redux";
import { Dimmer, Loader, Segment } from "semantic-ui-react";

export default function withLoading(Component, loadingProperty) {
  const WrappedComponent = props => {
    const { loading, ...rest } = props;
    if (loading) {
      return (
        <Segment style={{ height: "100%" }}>
          <Dimmer active>
            <Loader />
          </Dimmer>
        </Segment>
      );
    } else {
      return <Component {...rest} />;
    }
  };

  const mapStateToProps = state => ({
    loading: state.messages[loadingProperty]
  });

  return connect(mapStateToProps)(WrappedComponent);
}
