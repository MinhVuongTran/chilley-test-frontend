import axiosConfig from '@api/config';

type FormData = {
  id: number;
  completed: boolean;
};

export const updateTask = async (formData: FormData) => {
  try {
    const res = await axiosConfig.put(`/api/tasks/${formData.id}`, {
      completed: formData.completed,
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};
