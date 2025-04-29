import {ActivityIndicator, TouchableOpacityProps} from 'react-native';
import {ButtonContainer, ButtonDisabled, ButtonSecondary, GradientButton} from './button.style';
import Text from '../text/Text';
import {theme} from '../../themes/theme';
import {textTypes} from '../text/textTypes'

//Mesma coisa do input, ja tenho todos os tipos
//padrão do component touchableOpacity, incluindo o onPress
interface ButtonProps extends TouchableOpacityProps {
  title: string;
  margin?: string;
  type?: string;
  disabled?: boolean;
  loading?: boolean;
  onPress?: () => void;
}

const Button = ({title, type, margin, loading, onPress, disabled, ...props}: ButtonProps) => {
  const handleOnPress = () => {
    if (!loading && !disabled && onPress) {
      onPress();
    }
  };

  const renderText = (color: string) => (
    <>
      { loading ? (
        <ActivityIndicator color={theme.colors.neutralTheme.white} />
      ) : ( 
        <Text
          type={textTypes.BUTTON_SEMIBOLD}
          color={color}>
          {title}
        </Text>
      )}
    </>
  );

  if (disabled) {
    return ( 
      <ButtonDisabled {...props} margin={margin} >
        {renderText(theme.colors.neutralTheme.white)}
      </ButtonDisabled> 
    )
  }

  switch (type) {
    case theme.buttons.buttonsTheme.secondary:
      return (
        <ButtonSecondary {...props} margin={margin} onPress={handleOnPress}>
          {renderText(theme.colors.mainTheme.primary)}
        </ButtonSecondary>
      );
    case theme.buttons.buttonsTheme.primary:
    default:
      return (
        <ButtonContainer {...props} margin={margin} onPress={handleOnPress}>
          <GradientButton start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}} colors={[theme.colors.mainTheme.primary, theme.colors.pinkTheme.pink80]}>
          {renderText(theme.colors.neutralTheme.white)}
          </GradientButton>
        </ButtonContainer>
      );
  }
};

export default Button;
