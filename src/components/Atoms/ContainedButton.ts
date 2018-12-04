import styled from 'styled-components'
import ColorScheme from '../../theme/ColorScheme'
import Typography from '../../theme/Typography'

export const ContainedButton = styled.button`
  background: ${ColorScheme.Secondary};
  border: unset;
  border-radius: 4px;
  color: ${ColorScheme.White};
  font-size: ${Typography.BUTTON.fontSize};
  font-weight: ${Typography.BUTTON.fontStyle};
  margin-top: 16px;
  padding: 10px 24px;
`
export default ContainedButton
