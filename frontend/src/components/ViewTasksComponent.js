import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, Alert, Box } from '@mui/material';
import TaskService from '../services/TaskService';

const ViewTasksComponent = ({ tasks, refreshTasks }) => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleMarkDone = async (id) => {
    
    setError("");
    setSuccess("");

    try {
      await TaskService.updateTaskStatus(id);
      setSuccess("Task status updated successfully! ");
      refreshTasks();
    } catch (error) {
      setError("Failed to update task status. Please try again.");
      console.error("Error updating task status:", error);
    }
  };

  return (
    <div>
      {success && <Alert severity="success">{success}</Alert>}

      {error && <Alert severity="error">{error}</Alert>}

      {tasks.length === 0 ? (
        <Card style={{ width: "100%", textAlign: "center" }}>
          <Typography variant="h6" color="textSecondary">
            You have no pending tasks. 
          </Typography>
        </Card>
      ) : (
        tasks.map((task) => (
          <Card key={task.id} style={{ width: "100%", marginBottom: "10px" }}>
  <CardContent style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
    <Box style={{ textAlign: "left", flexGrow: 1 }}>
      <Typography variant="h6">{task.title}</Typography>
      <Typography variant="body2" color="textSecondary">{task.description}</Typography>
    </Box>
    <Button variant="contained" color="success" onClick={() => handleMarkDone(task.id)}>
      Done
    </Button>
  </CardContent>
</Card>

        ))
      )}
    </div>
  );
};

export default ViewTasksComponent;
