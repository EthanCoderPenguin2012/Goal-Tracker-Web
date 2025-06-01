import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  LinearProgress,
  Box,
  Chip,
  IconButton,
  Tooltip,
  useTheme,
  alpha,
} from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import AddTaskIcon from '@mui/icons-material/AddTask'
import VisibilityIcon from '@mui/icons-material/Visibility'
import { format } from 'date-fns'
import { motion } from 'framer-motion'

export interface Goal {
  id: string
  title: string
  description: string
  category: string
  progress: number
  dueDate: Date
  createdAt: Date
  updatedAt: Date
}

interface GoalCardProps {
  goal: Goal
  onEdit: (goal: Goal) => void
  onDelete: (goalId: string) => void
}

const MotionCard = motion(Card)

export default function GoalCard({ goal, onEdit, onDelete }: GoalCardProps) {
  const theme = useTheme()
  const progressColor = goal.progress >= 75
    ? 'success'
    : goal.progress >= 25
    ? 'primary'
    : 'error'

  const isOverdue = new Date() > goal.dueDate

  return (
    <MotionCard
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 30,
      }}
      whileHover={{ 
        y: -8,
        transition: {
          type: 'spring',
          stiffness: 400,
          damping: 25,
        }
      }}
      sx={{ 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column',
        position: 'relative',
        overflow: 'visible',
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          borderRadius: 'inherit',
          padding: '2px',
          background: `linear-gradient(45deg, 
            ${alpha(theme.palette.primary.main, 0.5)}, 
            ${alpha(theme.palette.secondary.main, 0.5)})`,
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          opacity: 0,
          transition: 'opacity 0.3s ease-in-out',
        },
        '&:hover::before': {
          opacity: 1,
        },
      }}
    >
      <CardContent sx={{ flexGrow: 1, p: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
          <Typography 
            variant="h6" 
            component="h2" 
            gutterBottom
            sx={{
              fontWeight: 600,
              color: 'text.primary',
              transition: 'all var(--md3-motion-duration-short) var(--md3-motion-easing-easeInOut)',
              '&:hover': {
                color: 'primary.main',
                transform: 'translateX(4px)',
              },
            }}
          >
            {goal.title}
          </Typography>
          <Box sx={{ display: 'flex', gap: 0.5 }}>
            <Tooltip title="Edit Goal">
              <IconButton 
                size="small" 
                onClick={() => onEdit(goal)}
                sx={{
                  color: 'primary.main',
                  transition: 'all var(--md3-motion-duration-short) var(--md3-motion-easing-easeInOut)',
                  '&:hover': {
                    backgroundColor: 'primary.container',
                    transform: 'scale(1.1) rotate(5deg)',
                  },
                }}
              >
                <EditIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Delete Goal">
              <IconButton 
                size="small" 
                onClick={() => onDelete(goal.id)}
                sx={{
                  color: 'error.main',
                  transition: 'all var(--md3-motion-duration-short) var(--md3-motion-easing-easeInOut)',
                  '&:hover': {
                    backgroundColor: 'error.container',
                    transform: 'scale(1.1) rotate(-5deg)',
                  },
                }}
              >
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>

        <Typography 
          variant="body2" 
          color="text.secondary" 
          paragraph
          sx={{
            mb: 2,
            lineHeight: 1.6,
            transition: 'all var(--md3-motion-duration-short) var(--md3-motion-easing-easeInOut)',
            '&:hover': {
              color: 'text.primary',
            },
          }}
        >
          {goal.description}
        </Typography>

        <Box sx={{ mb: 2, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          <Chip
            label={goal.category}
            size="small"
            sx={{
              bgcolor: 'primary.container',
              color: 'primary.onContainer',
              fontWeight: 500,
              transition: 'all var(--md3-motion-duration-short) var(--md3-motion-easing-easeInOut)',
              '&:hover': {
                bgcolor: 'primary.main',
                color: 'primary.contrastText',
                transform: 'scale(1.05)',
              },
            }}
          />
          <Chip
            label={`Due: ${format(goal.dueDate, 'MMM d, yyyy')}`}
            size="small"
            color={isOverdue ? 'error' : 'default'}
            sx={{
              bgcolor: isOverdue ? 'error.container' : 'surface.containerLow',
              color: isOverdue ? 'error.onContainer' : 'text.secondary',
              fontWeight: 500,
              transition: 'all var(--md3-motion-duration-short) var(--md3-motion-easing-easeInOut)',
              '&:hover': {
                bgcolor: isOverdue ? 'error.main' : 'surface.containerHigh',
                color: isOverdue ? 'error.contrastText' : 'text.primary',
                transform: 'scale(1.05)',
              },
            }}
          />
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <Box sx={{ width: '100%', mr: 1 }}>
            <LinearProgress
              variant="determinate"
              value={goal.progress}
              color={progressColor}
              sx={{ 
                height: 8, 
                borderRadius: 4,
                bgcolor: `${progressColor}.container`,
                '& .MuiLinearProgress-bar': {
                  borderRadius: 4,
                  transition: 'transform var(--md3-motion-duration-complex) var(--md3-motion-easing-spring)',
                  background: `linear-gradient(90deg, 
                    ${theme.palette[progressColor].main}, 
                    ${theme.palette[progressColor].light})`,
                },
              }}
            />
          </Box>
          <Box sx={{ minWidth: 35 }}>
            <Typography 
              variant="body2" 
              color={`${progressColor}.main`}
              sx={{ 
                fontWeight: 500,
                transition: 'all var(--md3-motion-duration-short) var(--md3-motion-easing-easeInOut)',
                '&:hover': {
                  transform: 'scale(1.1)',
                },
              }}
            >
              {`${Math.round(goal.progress)}%`}
            </Typography>
          </Box>
        </Box>
      </CardContent>

      <CardActions sx={{ p: 2, pt: 0 }}>
        <Button 
          size="small" 
          color="primary"
          startIcon={<VisibilityIcon />}
          sx={{
            transition: 'all var(--md3-motion-duration-short) var(--md3-motion-easing-easeInOut)',
            '&:hover': {
              transform: 'translateY(-2px)',
              backgroundColor: 'primary.container',
            },
          }}
        >
          View Details
        </Button>
        <Button 
          size="small" 
          color="primary"
          startIcon={<AddTaskIcon />}
          sx={{
            transition: 'all var(--md3-motion-duration-short) var(--md3-motion-easing-easeInOut)',
            '&:hover': {
              transform: 'translateY(-2px)',
              backgroundColor: 'primary.container',
            },
          }}
        >
          Add Task
        </Button>
      </CardActions>
    </MotionCard>
  )
} 