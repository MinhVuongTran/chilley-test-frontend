import {
  CheckOutlined,
  CloseOutlined,
  DeleteOutlined,
} from '@ant-design/icons';
import { deleteTask } from '@api/mutation/delete';
import { updateTask } from '@api/mutation/update';
import { Task } from '@type/task';
import { App, Button, List, Typography } from 'antd';

type TaskItem = {
  item: Task;
  onSuccess?: () => void;
};

const TaskItemComponent: React.FC<TaskItem> = ({ item, onSuccess }) => {
  const { notification } = App.useApp();

  const handleEdit = (id: number, completed: boolean) => {
    updateTask({ id, completed }).then((r) => {
      console.log('update', r);
      if (r?.status === 200) {
        notification.success({
          message: 'Task updated successfully',
        });
        onSuccess?.();
      }
    });
  };

  const handleDelete = (id: number) => {
    deleteTask({ id }).then((r) => {
      console.log('delete', r);
      if (r?.status === 200) {
        notification.success({
          message: 'Task deleted successfully',
        });
        onSuccess?.();
      }
    });
  };

  return (
    <List.Item
      key={item.id}
      actions={[
        <Button
          icon={item.completed ? <CloseOutlined /> : <CheckOutlined />}
          color="green"
          onClick={() => {
            handleEdit(item.id, !item.completed);
          }}></Button>,
        <Button
          icon={<DeleteOutlined />}
          danger
          onClick={() => {
            handleDelete(item.id);
          }}></Button>,
      ]}>
      <List.Item.Meta
        title={<Typography.Title level={5}>{item.title}</Typography.Title>}
        description={item.description}
      />
    </List.Item>
  );
};

export default TaskItemComponent;
