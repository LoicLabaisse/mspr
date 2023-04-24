import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "../components/App/Home/HomeScreen";
import SettingsScreen from "../components/App/Settings/SettingsScreen";
import {SafeAreaView} from "react-native";
import ProductDetails from "../components/App/Home/content/ProductDetails";
import {HomeNavigation} from "./AppNavigation/AppNavigation";

const Tab = createBottomTabNavigator();

const MyTabs = ()=> {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Accueil" component={HomeNavigation}  />
            <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
    );
}
export default MyTabs;
