import React,{useState,useEffect} from 'react';
import { Container,Grid2 } from '@mui/material';
import TaskService from '../services/TaskService';
import HeaderComponent from '../components/HeaderComponent';
import AddTaskComponent from '../components/AddTaskComponent';
import ViewTasksComponent from '../components/ViewTasksComponent';

const MainPage = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const data = await TaskService.getTasks();
    setTasks(data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <Container >
    <HeaderComponent />
    <Grid2 container spacing={2} style={{ marginTop: "20px" }}>
      <Grid2 item size={{ xs: 12, md: 6 }}>
        <AddTaskComponent refreshTasks={fetchTasks} />
      </Grid2>
      <Grid2 item size={{ xs: 12, md: 6 }}>
        <ViewTasksComponent tasks={tasks} refreshTasks={fetchTasks} />
      </Grid2>
    </Grid2>
  </Container>
  )
}

export default MainPage
