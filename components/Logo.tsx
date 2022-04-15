import { Typography, TypographyProps, useTheme } from '@mui/material'
import { FC } from 'react'

type Props = {
  white?: boolean
} & TypographyProps

const Logo: FC<Props> = ({ white, ...typographyProps }) => {
  const theme = useTheme()
  const color = white
    ? theme.palette.background.default
    : theme.palette.primary.main
  return (
    <Typography {...typographyProps} style={{ fontWeight: 900 }}>
      <span style={{ color: theme.palette.secondary.main }}>Z</span>
      <span style={{ color }}>IGEN</span>
    </Typography>
  )
}

export default Logo
