import { useState, useEffect } from 'react';
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';



interface ComplitedButtonsProps {
    onClick: () => void
    isChecked: boolean;
    children?: React.ReactNode;
}

interface MarkAllTodosAsCheckedButtonsProps {
  onClick: () => void;
  
   children?: React.ReactNode;
}


export const MarkAllTodosAsCheckedButtons: React.FC<MarkAllTodosAsCheckedButtonsProps> = ({ onClick }) =>  {
  
return (
    <Stack spacing={2} direction="row" style={{marginTop: 50,}}>
    
    <Button 
    variant="outlined"
     onClick={onClick}
     sx={{
      backgroundColor: 'rgba(213, 198, 178, 0.822)',
      border: 'none',
      color: 'white',
      
      '&:hover': {
        backgroundColor: 'rgba(213, 198, 178, 0.922)', 
        border: 'none',
      },
     }}
     >Complete All</Button>
    </Stack>
);
}



export default function ComplitedButtons({ onClick, isChecked}: ComplitedButtonsProps) {
  const [isActive, setIsActive] = useState(isChecked) // // использую isChecked для начального состояния 

  useEffect(() => {
    setIsActive(isChecked) // // обновляю состояние при изменении isChecked
  }, [isChecked]) // // слежу за именением состония  

  useEffect(() => {
    setIsActive(isChecked)
  }, [isChecked])

  const handleButtonClick = () => {
    onClick() // // Вызываю переданный обработчик 
    setIsActive(!isActive) // //переключаю состояние 
    
  }
  return (
    <Stack spacing={2} direction="row">
      
      <Button 
      variant="contained" 
      onClick={handleButtonClick}
      sx={{
        backgroundColor: isActive ? 'green' : 'rgba(213, 198, 178, 0.822)',
        '&:hover': {
          backgroundColor: 'rgba(213, 198, 178, 0.922)', 
        },
      }}
      
      >Complete</Button>
      
    </Stack>
  );
}

