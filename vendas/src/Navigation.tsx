import { NavigationContainer, ParamListBase, RouteProp } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./modules/login";
import Home from "./modules/home";
import { MenuUrl } from "./shared/enums/MenuUrl.enum";
import Splash from "./modules/splash";
import CreateUser from "./modules/createUser";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "./shared/components/icon/Icon";
import { theme } from "./shared/themes/theme";
import Orders from "./modules/orders";
import Profile from "./modules/profile";
import Product from "./modules/product";
import Cart from "./modules/cart";
import SearchProduct from "./modules/searchProducts";
import Category from "./modules/category";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  const renderTabBarIcon = (color: string, route: RouteProp<ParamListBase, string>) => {
    let iconName: string;

    switch (route.name) {
      case MenuUrl.HOME:
        iconName = 'home'
        break;
      case MenuUrl.ORDERS:
        iconName = 'books'
        break;
      case MenuUrl.SEARCH_PRODUCT:
        iconName = 'search'
        break;
      case MenuUrl.CART:
        iconName = 'cart'
        break;
      case MenuUrl.PROFILE:
      default:
        iconName = 'profile';
        break
    }
    return <Icon size={16} name={iconName} color={color}/> 
  }

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => renderTabBarIcon(color, route) ,
        tabBarActiveTintColor: theme.colors.pinkTheme.pink80,
        tabBarInactiveTintColor: theme.colors.grayTheme.gray100,
        tabBarLabelStyle: {
          marginBottom: 8,
        },
        tabBarStyle: {
          height: 52,
          padding: 8,
        }
      })}
    >
      <Tab.Screen name={MenuUrl.HOME} component={Home} options={{ headerShown: false }}/>
      <Tab.Screen name={MenuUrl.SEARCH_PRODUCT} component={SearchProduct} options={{ title: 'Buscar', headerShown: false }}/>
      <Tab.Screen name={MenuUrl.CART} component={Cart} options={{ title: 'Carrinho', headerShown: false }}/>
      <Tab.Screen name={MenuUrl.ORDERS} component={Orders} options={{ title: 'Pedidos', headerShown: false }} />
      <Tab.Screen name={MenuUrl.PROFILE} component={Profile} options={{ title: 'Perfil', headerShown: false }}/>
    </Tab.Navigator>
  );
}

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name={MenuUrl.SPLASH} 
          component={Splash} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name={MenuUrl.LOGIN} 
          component={Login} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name={MenuUrl.PRODUCT} 
          component={Product} 
        />
        <Stack.Screen 
          name={MenuUrl.CATEGORY} 
          component={Category} 
        />
        <Stack.Screen 
          name={MenuUrl.CREATE_USER} 
          component={CreateUser} 
          options={{ title: 'Criar usuário' }}
        />
        <Stack.Screen 
          name={MenuUrl.HOME} 
          component={TabNavigation} 
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;