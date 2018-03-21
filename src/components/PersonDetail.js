import React from "react";
import { Card, Icon, Image, Item } from "semantic-ui-react";
import withLoading from "./helpers/withLoading";

const PersonDetail = ({ person }) => {
  if (!person) {
    return <div className="person">Select a message</div>;

  } else {
    return (
      <div className="person">
        <Card>
          <Image src={person.avatar} />
          <Card.Content>
            <Card.Header>{person.name}</Card.Header>
              </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name="user" />
              22 Friends
            </a>
          </Card.Content>
        </Card>
        {person.company && (
          <Item>
            <Item.Image src={person.company.logo} size="medium" />
            <Item.Content>
              <Item.Header>{person.company.name}</Item.Header>
              <Item.Description>{person.company.description}</Item.Description>
            </Item.Content>
          </Item>
        )}
      </div>
    );
  }
};

export default withLoading(PersonDetail, "loadingPerson");
