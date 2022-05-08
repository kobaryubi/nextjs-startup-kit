import { FC } from 'react';
import Task, { Props as TaskProps } from './Task';

export type Props = {
  loading: boolean,
  tasks: TaskProps[]
}

const TaskList: FC<Props> = ({loading, tasks }) => {

  if (loading) {
    return <div className="list-items">loading</div>
  }

  if (tasks.length === 0) {
    return <div className="list-items">empty</div>
  }

  return (
    <div className="list-items">
      {tasks.map(task => (
        <Task key={task.id} {...task} />
      ))}
    </div>
  )
}

export default TaskList;
