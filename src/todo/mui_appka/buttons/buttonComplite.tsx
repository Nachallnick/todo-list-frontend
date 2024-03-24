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
    <Stack spacing={2} direction="row">
    
    <Button 
    variant="outlined"
     onClick={onClick}
     style={{
      backgroundColor: 'rgba(213, 198, 178, 0.822)',
      border: 'none',
      color: 'white',
      marginTop: 50,
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
      style={{
        backgroundColor: isActive ? 'green' : 'rgba(213, 198, 178, 0.822)',
        marginTop: 50,
      }}
      
      >Complete</Button>
      
    </Stack>
  );
}

