import React, { useState, forwardRef } from 'react';
import {
  NativeSyntheticEvent,
  TextInputChangeEventData,
  TextInputProps,
  View,
  TextInput
} from 'react-native';
import { ContainerInput, IconEye } from './input.style';
import { DisplayFlexColumn } from '../globalStyles/globalView.style';
import Text from '../text/Text';
import { textTypes } from '../text/textTypes';
import { theme } from '../../themes/theme';
import { insertMaskInCpf } from '../../functions/cpf';
import { insertMaskInPhone } from '../../functions/phone';

interface InputProps extends TextInputProps {
  title?: string;
  errorMessage?: string;
  secureTextEntry?: boolean;
  margin?: string;
  type: 'cel-phone' | 'cpf';
}

const Input = forwardRef<TextInput, InputProps>(({
  margin,
  secureTextEntry,
  title,
  errorMessage,
  onChange,
  type,
  ...props
}, ref) => {
  const [currentSecure, setCurrentSecure] = useState<boolean>(!!secureTextEntry);

  const handleOnChange = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
    if (onChange) {
      let text = event.nativeEvent.text;
      switch (type) {
        case 'cpf':
          text = insertMaskInCpf(text);
          break;
        case 'cel-phone':
          text = insertMaskInPhone(text);
          break;
        default:
          break;
      }

      onChange({
        ...event,
        nativeEvent: {
          ...event.nativeEvent,
          text,
        }
      });
    }
  };

  const handleOnPressEye = () => {
    setCurrentSecure((current) => !current);
  };

  return (
    <DisplayFlexColumn customMargin={margin}>
      {title && (
        <Text
          margin='0px 0px 4px 8px'
          color={theme.colors.grayTheme.gray100}
          type={textTypes.PARAGRAPH_SMALL_SEMIBOLD}
        >
          {title}
        </Text>
      )}
      <View>
        <ContainerInput
          {...props}
          ref={ref}
          hasSecureTextEntry={secureTextEntry}
          secureTextEntry={currentSecure}
          isError={!!errorMessage}
          onChange={handleOnChange}
        />
        {secureTextEntry && (
          <IconEye
            onPress={handleOnPressEye}
            name={currentSecure ? "eye-blocked" : "eye"}
            size={20}
          />
        )}
      </View>
      {errorMessage && (
        <Text
          margin='4px 0px 0px 8px'
          color={theme.colors.orangeTheme.orange80}
          type={textTypes.PARAGRAPH_SMALL_SEMIBOLD}
        >
          {errorMessage}
        </Text>
      )}
    </DisplayFlexColumn>
  );
});

export default Input;
