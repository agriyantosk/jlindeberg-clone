import {
    Button,
    Image,
    Text,
    View,
    ScrollView,
    Dimensions,
    TouchableOpacity,
} from "react-native";
import MyCarousel from "../components/HomeCarousel";
import HomeCollection from "../components/HomeCollections";
import ProductCard from "../components/ProductCard";

const { width } = Dimensions.get("window");
function HomeScreen({ navigation }) {
    return (
        <ScrollView>
            <View style={{ flex: 1, gap: 25 }}>
                {/* START BAGIAN ATAS */}
                <View>
                    <View
                        style={{
                            backgroundColor: "orange",
                            height: 250,
                            marginBottom: 5,
                        }}
                    >
                        <MyCarousel />
                    </View>
                    <View
                        style={{
                            flexDirection: "row",
                            height: 150,
                            gap: 5,
                            justifyContent: "center",
                        }}
                    >
                        <View style={{ flex: 1, flexDirection: "row" }}>
                            <View
                                style={{
                                    flex: 1,
                                }}
                            >
                                <Image
                                    source={{
                                        uri: "https://contents.lotteon.com/itemimage/_v204528/LO/21/06/25/91/75/_2/10/62/59/17/7/LO2106259175_2106259177_1.jpg/dims/resizef/554X554",
                                    }}
                                    style={{ flex: 1 }}
                                    resizeMode="cover"
                                />
                                <Text>MEN</Text>
                            </View>
                            <View
                                style={{
                                    flex: 1,
                                }}
                            >
                                <Image
                                    source={{
                                        uri: "https://image-cdn.trenbe.com/productmain/1678209351983-0a6d3e1f-c6ab-4fa9-b614-a09acdb7f9d1.jpeg",
                                    }}
                                    style={{ flex: 1 }}
                                    resizeMode="cover"
                                />
                                <Text>WOMEN</Text>
                            </View>
                        </View>
                    </View>
                </View>
                {/* END BAGIAN ATAS */}

                {/* START BAGIAN BAWAH */}
                <View style={{ flex: 1, paddingHorizontal: 20, gap: 20 }}>
                    <View style={{ flex: 1 }}>
                        <HomeCollection />
                    </View>
                    <View
                        style={{
                            flex: 1,
                            alignItems: "center",
                        }}
                    >
                        <Text>FEATURED PRODUCTS</Text>
                        <Text style={{ fontWeight: "bold" }}>
                            SPRING 2022 GOLF COLLECTION
                        </Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <ProductCard navigation={navigation} limit={4} />
                    </View>
                </View>

                {/* BUTTON */}
                <View style={{ alignItems: "center" }}>
                    <View
                        style={{
                            flex: 1,
                            width: width * 0.5,
                            paddingVertical: 15,
                        }}
                    >
                        <Button
                            title="VIEW ALL PRODUCTS"
                            color="black"
                            onPress={() => {
                                navigation.navigate("Shop");
                            }}
                            style={{
                                borderRadius: 30,
                                borderWidth: 1,
                                borderColor: "black",
                                paddingVertical: 30,
                            }}
                        />
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

export default HomeScreen;
