import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Platform, SafeAreaView, View} from "react-native";
import Home from "./ui/Screens/Home";
import Map from "./ui/Screens/Map";
import AllList from "./ui/Screens/AllList";
import ScanMe from "./ui/Screens/ScanMe";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListDetails from "./ui/Screens/ListDetails";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function TabNavigator(){
    return (
        <NavigationContainer >
            {Platform.OS == "android" && (
                <Drawer.Navigator>
                    <Drawer.Screen name="Products" component={Home}/>
                    <Drawer.Screen name="Maps" component={Map}/>
                    <Drawer.Screen name="Scan" component={ScanMe}/>
                    <Drawer.Screen name="StackLists" options={{headerShown:false}} component={AllList} />
                </Drawer.Navigator>
            )}
            {Platform.OS === "ios" && (
                <Tab.Navigator>
                    <Tab.Screen name="Products" component={Home}/>
                    <Tab.Screen name="Maps" component={Map}/>
                    <Tab.Screen name="Scan" component={ScanMe}/>
                    <Tab.Screen name="StackLists"  component={StackNavigator}/>
                </Tab.Navigator>
            )}
        </NavigationContainer>
    )
}
function StackNavigator(){
return(
    <Stack.Navigator>
        <Stack.Screen name="AllLists"  component={AllList}/>
        <Stack.Screen name="ListDetails" component={ListDetails}/>
    </Stack.Navigator>
)
}

 export default function App(){

    return (
        TabNavigator()
     )
}







