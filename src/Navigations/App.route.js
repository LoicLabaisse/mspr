import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from "../components/App/Home/HomeScreen";
import SettingsScreen from "../components/App/Settings/SettingsScreen";
import {SafeAreaView, Text} from "react-native";
import ProductDetails from "../components/App/Home/content/content/ProductDetails";
import {HomeNavigation} from "./AppNavigation/AppNavigation";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

const MyTabs = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Accueil') {
                        iconName = focused
                            ? 'home'
                            : 'home-outline';
                    } else if (route.name === 'Paramètres') {
                        iconName = focused ? 'ios-list' : 'ios-list-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#BEAA6F',
                tabBarInactiveTintColor: 'gray',
                headerShown: false,

            })}
        >
            <Tab.Screen name="Accueil" component={HomeNavigation}/>
            <Tab.Screen name="Paramètres" component={SettingsScreen}/>
        </Tab.Navigator>
    );
}
export default MyTabs;
