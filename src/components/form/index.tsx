import { createTask } from '@api/mutation/create';
import { App, Button, Form, Input } from 'antd';

type FormComponentType = {
  onSuccess?: () => void;
};

const FormComponent: React.FC<FormComponentType> = ({ onSuccess }) => {
  const { notification } = App.useApp();

  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    createTask({
      title: values.title,
      description: values.description,
    }).then((r) => {
      console.log(r);
      notification.success({
        message: 'Successfully!',
      });
      onSuccess?.();
    });
  };
  return (
    <Form
      form={form}
      name="horizontal_login"
      layout="inline"
      onFinish={onFinish}
      style={{ gap: '1rem' }}>
      <Form.Item
        name="title"
        rules={[{ required: true, message: 'Please enter your title!' }]}>
        <Input placeholder="Title" />
      </Form.Item>
      <Form.Item name="description">
        <Input placeholder="Description" />
      </Form.Item>
      <Form.Item shouldUpdate>
        {() => (
          <Button
            type="primary"
            htmlType="submit"
            disabled={
              !!form.getFieldsError().filter(({ errors }) => errors.length)
                .length
            }>
            Save
          </Button>
        )}
      </Form.Item>
    </Form>
  );
};

export default FormComponent;
