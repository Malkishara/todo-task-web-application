import React, { useState } from 'react';
import { Card, CardContent, Typography, TextField, Button, Alert } from '@mui/material';
import TaskService from '../services/TaskService';

const AddTaskComponent = ({ refreshTasks }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleAddTask = async () => {
    
    setError("");
    setSuccess("");

    
    if (!title.trim() || !description.trim()) {
      setError("Both Title and Description are required.");
      return;
    }

    try {
      await TaskService.addTask({ title, description });
      setTitle("");
      setDescription("");
      setSuccess("Task added successfully! ");
      refreshTasks();
    } catch (error) {
      setError("Failed to add task. Please try again.");
      console.error("Error adding task:", error);
    }
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Add Task</Typography>

        {success && <Alert severity="success">{success}</Alert>}

        {error && <Alert severity="error">{error}</Alert>}

        <TextField
          fullWidth
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          margin="normal"
          error={!title.trim() && error} 
          helperText={!title.trim() && error ? "Title is required" : ""}
        />
        
        <TextField
          fullWidth
          multiline
          rows={3}
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          margin="normal"
          error={!description.trim() && error} 
          helperText={!description.trim() && error ? "Description is required" : ""}
        />

        <Button variant="contained" color="primary" onClick={handleAddTask} fullWidth>
          Add
        </Button>
      </CardContent>
    </Card>
  );
};

export default AddTaskComponent;
