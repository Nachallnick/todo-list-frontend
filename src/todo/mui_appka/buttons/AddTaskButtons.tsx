import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


interface AddTaskButtonsProps {
    onAddTask: (e: React.FormEvent) => void
}

const AddTaskButtons: React.FC<AddTaskButtonsProps> = ({onAddTask}) => {
  return (
    <Stack spacing={2} direction="row" sx={{ml: '500px', mt: '7px'}}>
 
      <Button 
      variant="contained" 
      onClick={onAddTask}
      sx={{
        backgroundColor: 'rgba(213, 198, 178, 0.822)', 
        '&:hover': {
          backgroundColor: 'rgba(213, 198, 178, 0.922)', 
        },
        
      
      }}
      >Add Task</Button>
     
    </Stack>
  );
}

export default AddTaskButtons