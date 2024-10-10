import { ComponentPropsWithoutRef, ElementType, ForwardedRef, forwardRef } from 'react'

import s from './Button.module.css'
import {Icon} from '../Icon';


type InferType<T> = T extends ElementType<infer U> ? U : never

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  viewBox?: string
} & ComponentPropsWithoutRef<T>

export const Button = forwardRef(
  <T extends ElementType = 'button'>(props: ButtonProps<T>, ref: ForwardedRef<InferType<T>>) => {
    const {
      as: Component = 'button',
      children,
      className,
      viewBox,
      ...rest
    } = props

    return (
      <Component
        className={`${className} ${s.button}`}
        ref={ref}
        {...rest}
      >
        <span className={s.buttonContent}>
            <Icon
              height={'16px'}
              iconId={`search`}
              viewBox={viewBox || '0 0 16 16'}
              width={'16px'}
            />
        </span>
      </Component>
    )
  }
)
