import Login from './modules/login';
import {SafeAreaView} from 'react-native';

import { useState } from 'react';
import Modal from './shared/components/modal/Modal';
import Button from './shared/components/button/Button';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView>
      <Login />
    </SafeAreaView>
  );
};

export default App;
