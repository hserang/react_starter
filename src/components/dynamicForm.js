import React from 'react';
import {
  Header,
  List,
  Form,
  Input,
  Icon
} from 'semantic-ui-react';

export default() => (
  <Form>
    <p>Put form here</p>
    <Form.Field>
      <label>Label or no?</label>
      <Input
        icon={<Icon name='add circle' inverted circular link />}
        placeholder='Enter the Dragon'
      />
    </Form.Field>
  </Form>
)