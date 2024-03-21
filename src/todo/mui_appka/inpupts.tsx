import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function MultilineTextFields({ onTitleChange, onDescriptionChange, titleValue, description }) {
  return (
    <Box
      component="form"
      sx={{
        mt: 15,
        '& .MuiTextField-root': { m: 1,  },
        '& .MuiOutlinedInput-notchedOutline': {
          border: 'none', 
        },
        '& .MuiInputBase-inputMultiline': {
          textAlign: 'center',
        },
        '& .MuiTextField-root:not(:last-child)': {
          mb: -3, // Устанавливаем отступ снизу меньше, например, 1 вместо 2
        },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-multiline-flexible"
          label="Title"
          multiline
          maxRows={4}
          value={titleValue}
          onChange={(e) => onTitleChange(e)}
        />
        
        <TextField
          id="outlined-textarea"
          label="Description"
          placeholder='Placeholder'
          multiline

          value={description}
          onChange={(e) => onDescriptionChange(e)}
        />
      </div>
    
    
    </Box>
  );
}
