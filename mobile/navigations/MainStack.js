import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Details from "../screens/Details";
import HomeScreen from "../screens/Home";
import Shop from "../screens/Shop";

const Stack = createNativeStackNavigator();

export default function MainStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Shops"
                component={Shop}
                options={{
                    headerTitle: "J. LINDEBERG",
                    headerTitleAlign: "center",
                }}
            />
            <Stack.Screen
                name="Details"
                component={Details}
                options={{
                    headerTitle: "J. LINDEBERG",
                    headerTitleAlign: "center",
                }}
            />
        </Stack.Navigator>
    );
}
