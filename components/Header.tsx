import {
  AppBar,
  Box,
  Container,
  IconButton,
  Toolbar,
  Tooltip,
  useTheme,
} from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import Image from 'next/image'
import Logo from './Logo'

const Header = () => {
  const theme = useTheme()
  return (
    <AppBar position="sticky" elevation={0}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Image src="/zigen.webp" height={60} width={60} alt="logo" />
          <Logo variant="h5" white />
          <Box sx={{ flexGrow: 1 }} />
          <Tooltip title="GitHub repository">
            <IconButton
              href="https://github.com/zigen-project"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2"
            >
              <GitHubIcon htmlColor={theme.palette.background.default} />
            </IconButton>
          </Tooltip>
          <Tooltip title="Join our discord!!">
            <IconButton
              href="https://discord.com/invite/PPJEFrdE9f"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2"
              size="large"
            >
              <Image layout="fill" src="/discord-white.svg" alt="discord" />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header
