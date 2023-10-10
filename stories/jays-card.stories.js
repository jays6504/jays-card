import { html } from 'lit';
import '../src/jays-card.js';

export default {
  title: 'JaysCard',
  component: 'jays-card',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ header, backgroundColor }) {
  return html`
    <jays-card
      style="--jays-card-background-color: ${backgroundColor || 'white'}"
      .header=${header}
    >
    </jays-card>
  `;
}

export const App = Template.bind({});
App.args = {
  header: 'My app',
};
