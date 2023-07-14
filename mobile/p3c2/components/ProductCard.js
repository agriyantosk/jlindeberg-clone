import { useEffect, useState } from "react";
import {
    Image,
    View,
    Text,
    Dimensions,
    TouchableOpacity,
    ActivityIndicator,
    FlatList,
} from "react-native";
// import { useQuery, gql } from "@apollo/client";

const { width, height } = Dimensions.get("window");
export default function ProductCard(props) {
    const [product, setProduct] = useState([]);
    const { navigation, limit } = props;
    // const productData = gql`
    //     query ExampleQuery {
    //         products {
    //             id
    //             name
    //             slug
    //             description
    //             price
    //             mainImg
    //             categoryId
    //             mongoId
    //             Images {
    //                 id
    //                 productId
    //                 imgUrl
    //             }
    //             Category {
    //                 id
    //                 name
    //             }
    //         }
    //     }
    // `;
    // const { loading, error, data } = useQuery(productData);
    // console.log(error);
    const getData = async () => {
        try {
            const response = await fetch("http://10.0.2.2:3000/product");
            if (!response.ok) {
                return;
            } else {
                const data = await response.json();
                setProduct(data);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getData();
        console.log(product);
    }, []);
    return (
        <View
            style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
            }}
        >
            {/* {loading ? (
                <View
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>
            ) : error ? (
                <Text>Error: {error.message}</Text>
            ) : ( */}
            {/* <Text>{JSON.stringify(product)}</Text> */}
            <FlatList
                numColumns={2}
                data={product.slice(0, limit)}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            key={item.id}
                            onPress={() => {
                                navigation.navigate("Shop", {
                                    screen: "Details",
                                    initial: false,
                                    params: { productId: item.id },
                                });
                            }}
                            style={{ flexBasis: "50%", marginBottom: 20 }} // Added this line
                        >
                            <View
                                style={{
                                    width: width * 0.4,
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <Image
                                    source={{
                                        uri: item.mainImg,
                                    }}
                                    style={{
                                        height: height * 0.2,
                                        width: "100%",
                                    }}
                                />
                                <View
                                    style={{
                                        alignItems: "center",
                                        gap: 10,
                                        marginTop: 20,
                                    }}
                                >
                                    <Text
                                        numberOfLines={1}
                                        style={{ fontSize: 12 }}
                                    >
                                        {item.name}
                                    </Text>
                                    <Text style={{ fontWeight: "bold" }}>
                                        AED {item.price}.00
                                    </Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
}
