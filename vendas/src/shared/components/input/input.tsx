import {TextInputProps} from 'react-native/types';
import {ContainerInput} from './input.style';

//com o inputProps vou ter acesso a todas as funções padrões de input
//ex.: onChange
type InputProps = TextInputProps;

const Input = ({...props}: InputProps) => {
  return <ContainerInput {...props} />;
};

export default Input;
