import axiosConfig from '@api/config';

type FormData = {
  id: number;
};

export const deleteTask = async (formData: FormData) => {
  try {
    const res = await axiosConfig.delete(`/api/tasks/${formData.id}`);
    return res;
  } catch (error) {
    console.log(error);
  }
};
