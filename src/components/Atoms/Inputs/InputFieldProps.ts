export interface InputFieldProps {
  label: string,
  helperText?: string,
  className?: string // allow styled-components to inject CSS margin from outside.
                     // Only margin, no other CSS property from outside.
}
