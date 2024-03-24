import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/material';


interface DeleteButtonsProps {
    onClick: () => void // //Добавил пропс onClick //
    children?: React.ReactNode;
}

interface DeleteAllButtonsProps {
  onClick: () => void // // Добавил пропс onClick //
}

export const DeleteAllButtons: React.FC<DeleteAllButtonsProps> = ({ onClick }) => {
  return (
    <Stack spacing={1} direction="row" style={{marginTop: 50,}}>
    
    <Button 
    variant="outlined"
     onClick={onClick}
     sx={{
      backgroundColor: 'rgba(213, 198, 178, 0.822)',
      border: 'none',
      color: 'white',
      display: 'flex', 
      justifyContent: 'space-between', 
      width: 'auto', 
      
      '&:hover': {
        backgroundColor: 'rgba(213, 198, 178, 0.922)', 
        border: 'none',
       
      },
     }}
     >
      <Box sx={{
        flexGrow: 1, 
        textAlign: 'left'
            }}>Remove All</Box>
      <DeleteIcon sx={{fontSize: "18px", marginLeft: 1}}/></Button>
    </Stack>
);
}
 

const DeleteButtons: React.FC<DeleteButtonsProps> = ({ onClick }) => {

    return (
      <Stack direction="row" spacing={2}>
        <Button 
        variant="outlined" 
        
        onClick={onClick}
        style={{
        
         color: '#C41E3A',
         borderColor: '#C41E3A'
        }}
        >{<DeleteIcon />}</Button>
      </Stack>
    );
}

export default DeleteButtons
