import { View } from 'react-native';
import { ContainerLogin } from '../styles/login.style';
import Input from '../../../shared/components/input/Input';
import Button from '../../../shared/components/button/Button';
import { theme } from '../../../shared/themes/theme';
import { Icon } from '../../../shared/components/icon/Icon';
<script src="http://localhost:8097"></script>

const Login = () => {
  const handleOnPress = () => {
    console.log('clicou');
  };

  return (
    <View>
      <ContainerLogin>
        <Input margin='0px 0px 8px 0px' placeholder='Digite seu email' title='Email:'/>
        <Input secureTextEntry placeholder='Digite sua senha' title='Senha:'/>
        <Button 
          type={theme.buttons.buttonsTheme.primary} 
          margin="16px" 
          title="ENTRAR" 
          onPress={handleOnPress}
          />
      </ContainerLogin>
    </View>
  );
};

export default Login;
