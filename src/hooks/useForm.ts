import { useState } from 'react'

type FieldValue = string | boolean | number

interface FormValues {
  [key: string]: FieldValue
}

interface UseFormReturn<T> {
  values: T
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  setValue: (name: keyof T, value: FieldValue) => void
  reset: () => void
}

function useForm<T extends FormValues>(initialValues: T): UseFormReturn<T> {
  const [values, setValues] = useState<T>(initialValues)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, type, value, checked } = e.target
    let newValue: FieldValue = value

    if (type === 'checkbox') {
      newValue = checked
    } else if (type === 'number') {
      newValue = Number(value)
    }

    setValues((prevValues) => ({
      ...prevValues,
      [name]: newValue,
    }))
  }

  const setValue = (name: keyof T, value: FieldValue) => {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }))
  }

  const reset = () => {
    setValues(initialValues)
  }

  return {
    values,
    handleChange,
    setValue,
    reset,
  }
}

export default useForm
