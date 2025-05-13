import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./modules/login";
import Home from "./modules/home";
import { MenuUrl } from "./shared/enums/MenuUrl.enum";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={MenuUrl.LOGIN} component={Login} options={{ headerShown: false }}/>
        <Stack.Screen name={MenuUrl.HOME} component={Home} options={{ title: 'Home' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;