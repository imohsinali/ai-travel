import { useForm } from 'react-hook-form';

const useSignUpState = () => {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    // Handle form submission here
    // console.log("da", data);
  };
  return {
    handleSubmit,
    onSubmit,
    watch,
    control,
    errors,
  };
};

export default useSignUpState;
