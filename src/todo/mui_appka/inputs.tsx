import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { SxProps } from '@mui/material';






const MultilineTextFields = ({ onTitleChange, onDescriptionChange, titleValue, description, isEditing }) => {

  const inputStyles = {
    '& .MuiTextField-root': {
      m: 2,
      //  mt: 12,
      
       
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
      '& .MuiInputBase-input': { // Добавляем стили для текста внутри инпута
        color: 'rgba(213, 198, 178, 0.822)', // Цвет текста
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
          InputLabelProps={{
            style: { color: 'rgba(213, 198, 178, 0.822)' },
          }}
          inputProps={{
            style: { color: 'rgba(213, 198, 178, 0.822)' }, // Применение стиля непосредственно к input
          }}
         
        />
        
        <TextField
          id="outlined-textarea"
          label="Description"
         
          placeholder='Placeholder'
          multiline
         
          value={description}
          onChange={(e) => onDescriptionChange(e)}
          sx={inputStyles}
          InputLabelProps={{
            style: { color: 'rgba(213, 198, 178, 0.822)' },
          }}
          inputProps={{
            style: { color: 'rgba(213, 198, 178, 0.822)' }, // Применение стиля непосредственно к input
          }}
        />
      </div>
    
    
    </Box>
  );
}

export default MultilineTextFields