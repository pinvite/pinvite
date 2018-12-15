import React from 'react'

export interface InputFieldProps {
  label: string,
  error?: boolean,
  onChange?:  (title: string) => void,
  helperText?: string,
  className?: string // allow styled-components to inject CSS margin from outside.
                     // Only margin, no other CSS property from outside.
}
