import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


interface ImportTaskButtonsProps {
    onImportTasks: () => void
}

const ImportTaskButtons: React.FC<ImportTaskButtonsProps> = ({onImportTasks}) => {
  return (
    <Stack spacing={2} direction="row" style={{marginTop: 50,}}>
 
      <Button 
      variant="contained" 
      onClick={onImportTasks}
      sx={{
        backgroundColor: 'rgba(213, 198, 178, 0.822)', 
        '&:hover': {
          backgroundColor: 'rgba(213, 198, 178, 0.922)', 
        },
        
      
      }}
      >Import Task</Button>
     
    </Stack>
  );
}

export default ImportTaskButtons