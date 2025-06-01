import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
  useTheme,
  useColorScheme,
  alpha,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { motion, AnimatePresence } from 'framer-motion'

const MotionAppBar = motion(AppBar)
const MotionBox = motion(Box)
const MotionButton = motion(Button)
const MotionMenuItem = motion(MenuItem)
const MotionAvatar = motion(Avatar)
const MotionTypography = motion(Typography)

const pages = [
  { name: 'Goals', path: '/goals' },
  { name: 'Tasks', path: '/tasks' },
  { name: 'Calendar', path: '/calendar' },
  { name: 'Analytics', path: '/analytics' },
]
const settings = ['Profile', 'Settings', 'Logout']

export default function Navigation() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null)
  const theme = useTheme()
  const { mode, setMode } = useColorScheme()
  const pathname = usePathname()

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  const toggleColorMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light')
  }

  return (
    <MotionAppBar
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 30,
      }}
      position="static"
      color="default"
      elevation={0}
      sx={{
        borderRadius: 6,
        mt: 2,
        mx: 'auto',
        maxWidth: 1200,
        backdropFilter: 'blur(8px)',
        backgroundColor: (theme) => alpha(theme.palette.surface.main, 0.8),
        border: (theme) => `1px solid ${alpha(theme.palette.outline.main, 0.1)}`,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo for desktop */}
          <MotionBox
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <Typography
                component={Link}
                href="/"
                variant="h6"
                noWrap
                sx={{
                  fontWeight: 700,
                  color: 'primary.main',
                  textDecoration: 'none',
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    width: '100%',
                    height: '2px',
                    bottom: -4,
                    left: 0,
                    backgroundColor: 'primary.main',
                    transform: 'scaleX(0)',
                    transformOrigin: 'right',
                    transition: 'transform var(--md3-motion-duration-complex) var(--md3-motion-easing-easeInOut)',
                  },
                  '&:hover::after': {
                    transform: 'scaleX(1)',
                    transformOrigin: 'left',
                  },
                }}
              >
                Material Goals
              </Typography>
            </motion.div>
          </MotionBox>

          {/* Mobile menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              component={motion.button}
              whileTap={{ scale: 0.95 }}
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{
                transition: 'all var(--md3-motion-duration-short) var(--md3-motion-easing-easeInOut)',
                '&:hover': {
                  backgroundColor: 'primary.container',
                  transform: 'rotate(90deg)',
                },
              }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
                '& .MuiPaper-root': {
                  borderRadius: 2,
                  mt: 1.5,
                  backgroundColor: 'surface.containerHigh',
                  backdropFilter: 'blur(8px)',
                  border: (theme) => `1px solid ${alpha(theme.palette.outline.main, 0.1)}`,
                },
              }}
            >
              <AnimatePresence>
                {pages.map((page, index) => (
                  <motion.div
                    key={page.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <MenuItem
                      onClick={handleCloseNavMenu}
                      sx={{
                        transition: 'all var(--md3-motion-duration-short) var(--md3-motion-easing-easeInOut)',
                        '&:hover': {
                          backgroundColor: 'primary.container',
                          transform: 'translateX(4px)',
                        },
                        '&.Mui-selected': {
                          backgroundColor: 'primary.container',
                          color: 'primary.onContainer',
                        },
                      }}
                    >
                      <Link href={page.path} style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}>
                        <Typography textAlign="center">{page.name}</Typography>
                      </Link>
                    </MenuItem>
                  </motion.div>
                ))}
              </AnimatePresence>
            </Menu>
          </Box>

          {/* Logo for mobile */}
          <Typography
            variant="h5"
            noWrap
            component={Link}
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontWeight: 700,
              color: 'primary.main',
              textDecoration: 'none',
            }}
          >
            Material Goals
          </Typography>

          {/* Desktop menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page, index) => (
              <MotionBox
                key={page.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Button
                  component={Link}
                  href={page.path}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: 'text.primary',
                    display: 'block',
                    fontWeight: pathname === page.path ? 'bold' : 'normal',
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      width: '100%',
                      height: '2px',
                      bottom: 0,
                      left: 0,
                      backgroundColor: 'primary.main',
                      transform: pathname === page.path ? 'scaleX(1)' : 'scaleX(0)',
                      transformOrigin: pathname === page.path ? 'left' : 'right',
                      transition: 'transform var(--md3-motion-duration-complex) var(--md3-motion-easing-easeInOut)',
                    },
                    '&:hover::after': {
                      transform: 'scaleX(1)',
                      transformOrigin: 'left',
                    },
                    '&:hover': {
                      backgroundColor: 'primary.container',
                      color: 'primary.onContainer',
                    },
                  }}
                >
                  {page.name}
                </Button>
              </MotionBox>
            ))}
          </Box>

          {/* Theme toggle */}
          <Box sx={{ mr: 2 }}>
            <Tooltip title={`Switch to ${mode === 'light' ? 'dark' : 'light'} mode`}>
              <IconButton
                component={motion.button}
                whileHover={{ scale: 1.1, rotate: 180 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleColorMode}
                color="inherit"
                sx={{
                  transition: 'all var(--md3-motion-duration-short) var(--md3-motion-easing-easeInOut)',
                  '&:hover': {
                    backgroundColor: 'primary.container',
                    color: 'primary.onContainer',
                  },
                }}
              >
                {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>
            </Tooltip>
          </Box>

          {/* User menu */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  component={motion.div}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  alt="User Avatar"
                  src="/static/images/avatar/2.jpg"
                  sx={{
                    bgcolor: 'primary.main',
                    transition: 'all var(--md3-motion-duration-short) var(--md3-motion-easing-easeInOut)',
                    border: (theme) => `2px solid ${alpha(theme.palette.primary.main, 0.2)}`,
                  }}
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{
                mt: '45px',
                '& .MuiPaper-root': {
                  borderRadius: 2,
                  backgroundColor: 'surface.containerHigh',
                  backdropFilter: 'blur(8px)',
                  border: (theme) => `1px solid ${alpha(theme.palette.outline.main, 0.1)}`,
                },
              }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <AnimatePresence>
                {settings.map((setting, index) => (
                  <motion.div
                    key={setting}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <MenuItem
                      onClick={handleCloseUserMenu}
                      sx={{
                        transition: 'all var(--md3-motion-duration-short) var(--md3-motion-easing-easeInOut)',
                        '&:hover': {
                          backgroundColor: 'primary.container',
                          transform: 'translateX(4px)',
                        },
                      }}
                    >
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  </motion.div>
                ))}
              </AnimatePresence>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </MotionAppBar>
  )
}
 