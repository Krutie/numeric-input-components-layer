interface IProps {
  min: number;
  max: number;
}

const useNumericInput = ({ min, max }: IProps) => {
  const number = ref(min);
  const { validation } = useValidation({ value: number, min, max })

  const increment = () => number.value++;
  const decrement = () => number.value--;

  watch(() => number.value, (newValue) => {
    if (!newValue) {
      number.value = 0;
    }
  })

  return {
    increment,
    decrement,
    validation,
    number
  }
}

export default useNumericInput;