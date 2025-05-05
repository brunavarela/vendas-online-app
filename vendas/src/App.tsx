import Login from './modules/login';
import {SafeAreaView} from 'react-native';
import store from './store'
import { Provider } from 'react-redux'


const App = () => {

  return (
    <Provider store={store}>
      <SafeAreaView>
        <Login />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
