import { ChangeEvent, ComponentPropsWithoutRef, forwardRef } from 'react'

import s from './TextField.module.css'

export type Props = {
  onValueChange?: (value: string) => void
  value?: string
} & ComponentPropsWithoutRef<'input'>
export const TextField = forwardRef<HTMLInputElement, Props>(
  (
    {
      className,
      onChange,
      onValueChange,
      placeholder,
      value,
    },
    ref
  ) => {

    const classNames = {
      input: `${s.input} ${className}`,
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e)
      onValueChange?.(e.currentTarget.value)
    }

    return (
      <div className={`${s.container} ${className}`}>
          <input
            autoFocus
            className={classNames.input}
            onChange={onChangeHandler}
            placeholder={placeholder}
            ref={ref}
            type={'text'}
            value={value}
          />
      </div>
    )
  }
)
