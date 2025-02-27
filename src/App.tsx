import { getAllTask } from '@api/query/getAll';
import FormComponent from '@components/form';
import { Task } from '@type/task';
import { Card, Flex, List, Typography } from 'antd';
import { useCallback, useEffect, useState } from 'react';
import './App.css';

import TaskItemComponent from '@components/task';

function App() {
  const [task, setTask] = useState<Task[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetch = useCallback(() => {
    setLoading(true);
    getAllTask()
      .then((r) => {
        setTask(r?.data);
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    fetch();
  }, []);

  return (
    <Flex vertical justify="flex-start" gap={12}>
      <Typography.Title style={{ color: '#fff' }}>My Todos</Typography.Title>
      <Card
        title={
          <div style={{ padding: '1rem 0' }}>
            <FormComponent onSuccess={fetch} />
          </div>
        }>
        <div
          className="custom-scrollbar"
          style={{ maxHeight: '400px', overflow: 'auto' }}>
          <List
            loading={loading}
            dataSource={task}
            renderItem={(item) => {
              return <TaskItemComponent item={item} onSuccess={fetch} />;
            }}></List>
        </div>
      </Card>
    </Flex>
  );
}

export default App;
