'use client'

import { useState } from 'react'
import {
  Container,
  Grid,
  Typography,
  Button,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  MenuItem,
} from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import GoalCard, { Goal } from '@/components/GoalCard'

const categories = ['Personal', 'Work', 'Health', 'Education', 'Finance']

export default function GoalsPage() {
  const [goals, setGoals] = useState<Goal[]>([
    {
      id: '1',
      title: 'Learn React',
      description: 'Master React and Next.js for modern web development',
      category: 'Education',
      progress: 65,
      dueDate: new Date('2024-12-31'),
      createdAt: new Date('2024-01-01'),
      updatedAt: new Date('2024-01-01'),
    },
    {
      id: '2',
      title: 'Run a Marathon',
      description: 'Train and complete a full marathon',
      category: 'Health',
      progress: 30,
      dueDate: new Date('2024-06-30'),
      createdAt: new Date('2024-01-01'),
      updatedAt: new Date('2024-01-01'),
    },
  ])

  const [open, setOpen] = useState(false)
  const [editingGoal, setEditingGoal] = useState<Goal | null>(null)
  const [formData, setFormData] = useState<Partial<Goal>>({
    title: '',
    description: '',
    category: '',
    dueDate: new Date(),
  })

  const handleOpen = () => {
    setOpen(true)
    setEditingGoal(null)
    setFormData({
      title: '',
      description: '',
      category: '',
      dueDate: new Date(),
    })
  }

  const handleClose = () => {
    setOpen(false)
    setEditingGoal(null)
  }

  const handleEdit = (goal: Goal) => {
    setEditingGoal(goal)
    setFormData({
      title: goal.title,
      description: goal.description,
      category: goal.category,
      dueDate: goal.dueDate,
    })
    setOpen(true)
  }

  const handleDelete = (goalId: string) => {
    setGoals(goals.filter((goal) => goal.id !== goalId))
  }

  const handleSubmit = () => {
    if (editingGoal) {
      // Update existing goal
      setGoals(
        goals.map((goal) =>
          goal.id === editingGoal.id
            ? {
                ...goal,
                ...formData,
                updatedAt: new Date(),
              }
            : goal
        )
      )
    } else {
      // Create new goal
      const newGoal: Goal = {
        id: Math.random().toString(36).substr(2, 9),
        title: formData.title || '',
        description: formData.description || '',
        category: formData.category || '',
        progress: 0,
        dueDate: formData.dueDate || new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      }
      setGoals([...goals, newGoal])
    }
    handleClose()
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h4" component="h1">
          My Goals
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleOpen}
        >
          Add Goal
        </Button>
      </Box>

      <Grid container spacing={3}>
        {goals.map((goal) => (
          <Grid item key={goal.id} xs={12} sm={6} md={4}>
            <GoalCard
              goal={goal}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          </Grid>
        ))}
      </Grid>

      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>{editingGoal ? 'Edit Goal' : 'Add New Goal'}</DialogTitle>
        <DialogContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, pt: 2 }}>
            <TextField
              label="Title"
              fullWidth
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            />
            <TextField
              label="Description"
              fullWidth
              multiline
              rows={3}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            />
            <TextField
              select
              label="Category"
              fullWidth
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            >
              {categories.map((category) => (
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              label="Due Date"
              type="date"
              fullWidth
              value={formData.dueDate?.toISOString().split('T')[0]}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  dueDate: new Date(e.target.value),
                })
              }
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit} variant="contained">
            {editingGoal ? 'Update' : 'Create'}
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  )
} 