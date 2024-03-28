import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


interface SaveButtonsProps {
    
    onClick: () => void
    children?: React.ReactNode;
}

const SaveButtons: React.FC<SaveButtonsProps> = ({onClick, }) => {
  return (
    <Stack spacing={2} direction="row" sx={{ml: '500px', mt: '7px'}}>
 
      <Button 
      variant="contained" 
      onClick={onClick}
      sx={{
        backgroundColor: 'rgba(213, 198, 178, 0.822)', 
        '&:hover': {
          backgroundColor: 'rgba(213, 198, 178, 0.922)', 
        },
        
      
      }}
      >Save</Button>
     
    </Stack>
  );
}

export default SaveButtons