import axiosConfig from '@api/config';

export const getAllTask = async () => {
  try {
    const res = await axiosConfig.get('/api/tasks');
    return res;
  } catch (error) {
    console.log(error);
  }
};
