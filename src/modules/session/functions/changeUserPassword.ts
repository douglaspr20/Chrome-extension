import { Auth } from 'aws-amplify';
import { notification } from 'antd';
import { Dispatch, SetStateAction } from 'react';

interface changeUserPasswordArgs {
  data: any;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setCurrent: Dispatch<SetStateAction<number>>;
  current: number;
}

export const changeUserPassword = async ({ data, setIsLoading, setCurrent, current }: changeUserPasswordArgs) => {
  try {
    setIsLoading(true);
    const user = await Auth.currentAuthenticatedUser();

    await Auth.changePassword(user, data.currentPassword, data.password);

    await notification.success({
      message: 'Success',
      description: `Password updated.`,
    });
    setCurrent(current + 1);
  } catch (error) {
    if (error?.message === 'Incorrect username or password.') {
      notification.error({
        message: 'Error',
        description: `Incorrect current password.`,
      });
    } else {
      notification.error({
        message: 'Error',
        description: 'Something went wrong. Please try again.',
      });
    }
  } finally {
    setIsLoading(false);
  }
};
