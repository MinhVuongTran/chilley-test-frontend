import axiosConfig from '@api/config';

type FormData = {
  title: string;
  description?: string;
};

export const createTask = async (formData: FormData) => {
  try {
    const res = await axiosConfig.post('/api/tasks', formData);
    return res;
  } catch (error) {
    console.log(error);
  }
};
