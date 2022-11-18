import { InputContainer,  } from "./style";



export function Input ({value}) {
    return (
        <InputContainer>

        <input disabled value={value}/>

        </InputContainer>
    )

        
  }
  