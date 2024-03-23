import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';


interface UpdateButtonsProps {
  onClick: () => void // Добавил пропс onClick
  children?: React.ReactNode;
}

const UpdateButtons: React.FC<UpdateButtonsProps> = ({ onClick}) =>  {
  return (
    <Box sx={{ '& > :not(style)': { m: 0}, '& svg': {
      fontSize: '1.2rem', 
    },}}>
      
      <Fab 
      color="secondary" 
      aria-label="edit"
      onClick={onClick}
      style={{
        width: '36px', 
        height: '36px',
        
      }}
      >
        <EditIcon />
      </Fab>
    
    </Box>
  );
}

export default UpdateButtons