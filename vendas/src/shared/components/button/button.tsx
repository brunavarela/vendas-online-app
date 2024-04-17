import {TouchableOpacityProps} from 'react-native';
import {ButtonContainer} from './button.style';
import Text from '../text/Text';
import {theme} from '../../themes/theme';
import {textTypes} from '../text/textTypes';

//Mesma coisa do input, ja tenho todos os tipos
//padrão do component touchableOpacity, incluindo o onPress
interface ButtonProps extends TouchableOpacityProps {
  title: string;
  margin?: string;
}

const Button = ({title, margin, ...props}: ButtonProps) => {
  return (
    <ButtonContainer margin={margin} {...props}>
      <Text type={textTypes.BUTTON_BOLD} color={theme.colors.neutralTheme.white}>{title}</Text>
    </ButtonContainer>
  );
};

export default Button;
