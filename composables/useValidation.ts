interface IProps {
  value: Ref<number>;
  min: number;
  max: number;
}

const useValidation = ({ value, min, max }: IProps) => {
  const validation = computed(() => {
    if (value.value > max)
      return {
        error: true,
        message: `Cannot select value more than ${max} at this point.`
      }
    else if (value.value < min)
      return {
        error: true,
        message: `Select at least ${min} value.`
      }
    else
      return {
        error: false,
        message: ''
      }
  });

  return {
    validation
  }
}

export default useValidation;