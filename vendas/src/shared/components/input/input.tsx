import { TextInputProps, View } from 'react-native';
import { ContainerInput, IconEye } from './input.style';
import { DisplayFlexColumn } from '../globalStyles/GlobalView.style';
import Text from '../text/Text';
import { textTypes } from '../text/textTypes';
import { theme } from '../../themes/theme';
import { useState } from 'react';
import { Icon } from '../icon/Icon';

interface InputProps extends TextInputProps {
  title?: string;
  errorMessage?: string;
  secureTextEntry?: boolean;
  margin?: string;
}

const Input = ({ margin, secureTextEntry, title, errorMessage, ...props }: InputProps) => {
  const [currentSecure, setCurrentSecure] = useState<boolean>(!!secureTextEntry);
  
  const handleOnPressEye = () => {
    setCurrentSecure((current) => !current)
  }

  return (
    <DisplayFlexColumn customMargin={margin}>
      {title && (
        <Text margin='0px 0px 4px 8px' color={theme.colors.grayTheme.gray100} type={textTypes.PARAGRAPH_SMALL_SEMIBOLD}>
          {title}
        </Text>
      )}
      <View>
        <ContainerInput hasSecureTextEntry={secureTextEntry} secureTextEntry={currentSecure} isError={!!errorMessage} {...props}/>
        {secureTextEntry && <IconEye onPress={handleOnPressEye} name={currentSecure ? "eye-blocked" : "eye"} size={20}/>}
      </View>
      {errorMessage && (
        <Text margin='4px 0px 0px 8px' color={theme.colors.orangeTheme.orange80} type={textTypes.PARAGRAPH_SMALL_SEMIBOLD}>
          {errorMessage}
        </Text>
      )}
    </DisplayFlexColumn>
  )
};

export default Input;
