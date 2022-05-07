import { ComponentStory, ComponentMeta } from '@storybook/react';
import Task from '../components/Task'
import { action } from '@storybook/addon-actions';

export default {
  component: Task,
  title: 'Task',
} as ComponentMeta<typeof Task>

const Template: ComponentStory<typeof Task> = args => <Task {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: '1',
  title: 'Test Task',
  state: 'TASK_INBOX',
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask'),
}

export const Pinned = Template.bind({});
Pinned.args = {
  ...Default.args,
  state: 'TASK_PINNED'
}

export const Archived = Template.bind({})
Archived.args = {
  ...Default.args,
  state: 'TASK_ARCHIVED'
}
