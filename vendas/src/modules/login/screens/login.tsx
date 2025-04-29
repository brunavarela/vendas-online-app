import { View } from 'react-native';
import { ContainerLogin, ImageLogo } from '../styles/login.style';
import Input from '../../../shared/components/input/Input';
import Button from '../../../shared/components/button/Button';
import { theme } from '../../../shared/themes/theme';
import { useLogin } from '../hooks/useLogin';

const Login = () => {
  const {
    email,
    password,
    loading,
    errorMessage,
    handleOnPress,
    handleOnChangeEmail,
    handleOnChangePassword
  } = useLogin();

  return (
    <View>
      <ContainerLogin>
        <ImageLogo 
          resizeMode="contain" 
          source={require('../../../assets/images/Abba.png')} />
        <Input 
          value={email}
          errorMessage={errorMessage} 
          margin='0px 0px 8px 0px' 
          placeholder='Digite seu email' 
          title='Email:'
          onChange={handleOnChangeEmail}
        />
        <Input 
          value={password}
          secureTextEntry 
          placeholder='Digite sua senha' 
          title='Senha:'
          onChange={handleOnChangePassword}
        />
        <Button 
          type={theme.buttons.buttonsTheme.primary} 
          loading={loading}
          margin="16px" 
          title="ENTRAR" 
          onPress={handleOnPress}
        />
      </ContainerLogin>
    </View>
  );
};

export default Login;
