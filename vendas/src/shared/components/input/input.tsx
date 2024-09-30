import { TextInputProps } from 'react-native';
import { ContainerInput } from './input.style';
import { DisplayFlexColumn } from '../globalStyles/GlobalView.style';
import Text from '../text/Text';
import { textTypes } from '../text/textTypes';
import { theme } from '../../themes/theme';

interface InputProps extends TextInputProps {
  title?: string;
  errorMessage?: string;
}

const Input = ({title, errorMessage, ...props}: InputProps) => {
  return (
    <DisplayFlexColumn>
      {title && (
        <Text margin='0px 0px 4px 8px' color={theme.colors.grayTheme.gray100} type={textTypes.PARAGRAPH_SMALL_SEMIBOLD}>
          {title}
        </Text>
      )}
      <ContainerInput isError={!!errorMessage} {...props}/>
      {errorMessage && (
        <Text margin='4px 0px 0px 8px' color={theme.colors.orangeTheme.orange80} type={textTypes.PARAGRAPH_SMALL_SEMIBOLD}>
          {errorMessage}
        </Text>
      )}
    </DisplayFlexColumn>
  )
};

export default Input;
