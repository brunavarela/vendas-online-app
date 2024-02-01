import {Text, TouchableOpacityProps} from 'react-native';
import {ButtonContainer} from './button.style';

//Mesma coisa do input, ja tenho todos os tipos
//padrão do component touchableOpacity, incluindo o onPress
interface ButtonProps extends TouchableOpacityProps {
  title: string;
  margin?: string
}

const Button = ({title, margin, ...props}: ButtonProps) => {
  return (
    <ButtonContainer margin={margin} {...props}>
      <Text>{title}</Text>
    </ButtonContainer>
  );
};

export default Button;
