import { ComponentStory, ComponentMeta } from '@storybook/react';
import TaskList from '../components/TaskList';
import * as TaskStories from './Task.stories';
import { Props as TaskProps } from '../components/Task';

export default {
  component: TaskList,
  title: 'TaskList',
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>{Story()}</div>
    )
  ]
} as ComponentMeta<typeof TaskList>

const Template: ComponentStory<typeof TaskList> = args => <TaskList {...args} />

export const Default = Template.bind({})
Default.args = {
  tasks: [
    { ...TaskStories.Default.args as TaskProps, id: '1', title: 'Task 1' },
    { ...TaskStories.Default.args as TaskProps, id: '2', title: 'Task 2' },
    { ...TaskStories.Default.args as TaskProps, id: '3', title: 'Task 3' },
    { ...TaskStories.Default.args as TaskProps, id: '4', title: 'Task 4' },
    { ...TaskStories.Default.args as TaskProps, id: '5', title: 'Task 5' },
    { ...TaskStories.Default.args as TaskProps, id: '6', title: 'Task 6' },
  ]
}
