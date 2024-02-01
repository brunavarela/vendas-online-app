import {View, Text, TextInput} from 'react-native';
import {ContainerLogin} from '../styles/login.style';
import Input from '../../../shared/components/input/input';

const Login = () => {
  return (
    <View>
      <ContainerLogin>
        <Text>Login</Text>
        <Input/>
      </ContainerLogin>
    </View>
  );
};

export default Login;
