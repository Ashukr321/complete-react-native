import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import SettingScreen from "./screens/SettingScreen";
const Tab = createBottomTabNavigator();
import Icon from 'react-native-vector-icons/AntDesign';
const User = <Icon name="user" size={25} color="blue" />;
const Setting = <Icon name="setting" size={25} color="blue" />;
const Home = <Icon name="home" size={25} color="blue" />;
export default function App() {
  return (
    
    
    <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen}
            options={{tabBarIcon: ()=>{return Home}}}
          />
          <Tab.Screen name="Profile" component={ProfileScreen}
          options={{tabBarIcon: ()=>{return User}}}
          />
          <Tab.Screen name="Setting" component={SettingScreen}
            options={{tabBarIcon: ()=>{return Setting}}}
          />
          
        </Tab.Navigator>
    </NavigationContainer>
  );
}

