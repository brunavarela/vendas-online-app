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
        <Icon name="home3" color="blue" size={44}/>
        <Input errorMessage='Usuário ou senha inválidos' placeholder='Digite seu email' title='Email:'/>
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
