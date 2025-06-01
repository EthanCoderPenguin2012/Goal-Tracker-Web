import { Container, Typography, Box, Button, Grid, Paper } from '@mui/material'
import Link from 'next/link'
import AddIcon from '@mui/icons-material/Add'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import InsightsIcon from '@mui/icons-material/Insights'

const features = [
  {
    icon: <AddIcon sx={{ fontSize: 40 }} />,
    title: 'Set Clear Goals',
    description: 'Define your objectives with detailed milestones and track your progress in real-time.',
  },
  {
    icon: <TrendingUpIcon sx={{ fontSize: 40 }} />,
    title: 'Track Progress',
    description: 'Monitor your achievements with intuitive progress bars and milestone celebrations.',
  },
  {
    icon: <CalendarMonthIcon sx={{ fontSize: 40 }} />,
    title: 'Plan Ahead',
    description: 'Organize your goals with a calendar view and never miss an important deadline.',
  },
  {
    icon: <InsightsIcon sx={{ fontSize: 40 }} />,
    title: 'Analyze Growth',
    description: 'Get insights into your productivity patterns and optimize your goal-setting strategy.',
  },
]

export default function Home() {
  return (
    <Container maxWidth="lg">
      {/* Hero Section */}
      <Box
        component="main"
        sx={{
          py: { xs: 8, md: 12 },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 4,
          textAlign: 'center',
        }}
      >
        <Typography
          component="h1"
          variant="h1"
          sx={{
            fontWeight: 'bold',
            background: 'linear-gradient(45deg, var(--mui-palette-primary-main), var(--mui-palette-primary-dark))',
            backgroundClip: 'text',
            textFillColor: 'transparent',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            mb: 2,
          }}
        >
          Material Goals
        </Typography>
        <Typography
          variant="h4"
          sx={{
            color: 'text.secondary',
            maxWidth: '800px',
            mb: 4,
            lineHeight: 1.4,
          }}
        >
          Transform your aspirations into achievements with our modern goal tracking application.
          Built with Material Design 3 for a beautiful and intuitive experience.
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
          <Button
            component={Link}
            href="/goals"
            variant="contained"
            size="large"
            startIcon={<AddIcon />}
            sx={{
              px: 4,
              py: 1.5,
              fontSize: '1.1rem',
            }}
          >
            Get Started
          </Button>
          <Button
            component={Link}
            href="/goals"
            variant="outlined"
            size="large"
            sx={{
              px: 4,
              py: 1.5,
              fontSize: '1.1rem',
            }}
          >
            Learn More
          </Button>
        </Box>
      </Box>

      {/* Features Section */}
      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Typography
          variant="h2"
          sx={{
            textAlign: 'center',
            mb: 6,
            fontWeight: 'bold',
          }}
        >
          Why Choose Material Goals?
        </Typography>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  bgcolor: 'background.paper',
                  borderRadius: 4,
                  transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
                  },
                }}
              >
                <Box
                  sx={{
                    color: 'primary.main',
                    mb: 2,
                    p: 2,
                    borderRadius: '50%',
                    bgcolor: 'primary.light',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {feature.icon}
                </Box>
                <Typography
                  variant="h5"
                  component="h3"
                  sx={{
                    fontWeight: 600,
                    mb: 2,
                  }}
                >
                  {feature.title}
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{
                    lineHeight: 1.6,
                  }}
                >
                  {feature.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  )
} 