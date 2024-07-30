import { TextInputProps } from 'react-native';
import { ContainerInput } from './input.style';
import { DisplayFlexColumn } from '../globalStyles/GlobalView.style';
import Text from '../text/Text';
import { textTypes } from '../text/textTypes';
import { theme } from '../../themes/theme';

//com o inputProps vou ter acesso a todas as funções padrões de input
//ex.: onChange

interface InputProps extends TextInputProps {
  title?: string;
}

const Input = ({ title, ...props }: InputProps) => {
  return (
    <DisplayFlexColumn>
      {title && (
        <Text 
          margin='0px 0px 4px 8px' 
          color={theme.colors.grayTheme.gray100} 
          type={textTypes.PARAGRAPH_SMALL_SEMIBOLD}
        >
          {title}
        </Text>
      )}
      <ContainerInput {...props} />;
    </DisplayFlexColumn>
  );
};

export default Input;
