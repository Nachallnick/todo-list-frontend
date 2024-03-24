import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function MultilineTextFields({ onTitleChange, onDescriptionChange, titleValue, description, isEditing }) {

  const inputStyles = {
    '& .MuiTextField-root': {
      m: 3,
      width: '100%', 
    },
    '& .MuiOutlinedInput-root': {
      borderRadius: '10px', 
      '& fieldset': { // Основной бордер инпута
        borderColor: 'rgba(213, 198, 178, 0.822)', // Здесь задаю цвет границы по умолчанию
      },
      '&:hover fieldset': { // Бордер инпута при наведении
        borderColor: 'rgba(213, 198, 178, 0.822)', // Цвет границы при наведении
      },
      '&.Mui-focused fieldset': { // Бордер инпута при фокусе
        borderColor: 'rgba(213, 198, 178, 0.822)', 
        borderWidth: '2px', // увеличиваю ширину границы при фокусе
      },
    },
    '& .MuiInputLabel-root': { // Стили для лейбла
      color: 'rgba(213, 198, 178, 0.822)', // Цвет лейбла по умолчанию
      '&.Mui-focused': { // Цвет лейбла при фокусе
        color: 'rgba(213, 198, 178, 0.822)', 
      },
    },
  };

  return (
    <Box
      component="form"
      sx={{
        mt: 1,
        
        ...inputStyles, // Применение стилей
      }}
      noValidate
      autoComplete="off"
    >

      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <TextField
          id="outlined-multiline-flexible"
          label="Title"
         
          multiline
          maxRows={4}
          value={titleValue}
          onChange={(e) => onTitleChange(e)}
          sx={inputStyles}
        />
        
        <TextField
          id="outlined-textarea"
          label="Description"
         
          placeholder='Placeholder'
          multiline
         
          value={description}
          onChange={(e) => onDescriptionChange(e)}
          sx={inputStyles}
        />
      </div>
    
    
    </Box>
  );
}
