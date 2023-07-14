import { View, Text, Image, Button, ScrollView } from "react-native";
import ProductCard from "../components/ProductCard";
import ShopHeaders from "../components/ShopHeaders";

export default function Shop({ navigation }) {
    return (
            <View style={{ flex: 1, gap: 20 }}>
                <View>
                    <ShopHeaders />
                </View>
                <View style={{ flex: 1, paddingHorizontal: 20 }}>
                    <ProductCard navigation={navigation} />
                </View>
            </View>
    );
}
