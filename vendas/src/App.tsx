import Login from './modules/login';
import {SafeAreaView} from 'react-native';
import store from './store'
import { Provider } from 'react-redux'
import GlobalModal from './shared/components/modal/globalModal/GlobalModal';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <GlobalModal/>
      <SafeAreaView>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Login"
              component={Login}
            />
            <Stack.Screen name="Home" component={Login} options={{title: 'Home'}}/>
          </Stack.Navigator>
        </NavigationContainer>
        <Login />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
