import { Image, View, Text, TouchableOpacity } from "react-native";

export default function HomeCollection() {
    return (
        <View style={{ flex: 1, gap: 15 }}>
            <View>
                <Image
                    source={{
                        uri: "https://golfbusinessnews.com/wp-content/uploads/2021/08/Screenshot-2021-08-04-at-11.01.48.png",
                    }}
                    style={{
                        height: 200,
                        position: "relative",
                    }}
                />

                <View
                    style={{
                        position: "absolute",
                        justifyContent: "center",
                        alignItems: "center",
                        height: 200,
                        width: "100%",
                        zIndex: 100,
                    }}
                >
                    <Text
                        style={{
                            color: "white",
                            fontSize: 18,
                            fontWeight: "700",
                        }}
                    >
                        GOLF COLLECTION
                    </Text>
                    <TouchableOpacity
                        style={{
                            backgroundColor: "white",
                            paddingVertical: 7,
                            paddingHorizontal: 15,
                            marginTop: 10,
                        }}
                        onPress={() => {}}
                    >
                        <Text style={{ color: "black", fontSize: 14 }}>
                            SHOP NOW
                        </Text>
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        backgroundColor: "rgba(0, 0, 0, 0.3)",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        zIndex: 1,
                    }}
                />
            </View>

            <View>
                <Image
                    source={{
                        uri: "https://s.yimg.com/ny/api/res/1.2/J8mOLMUEMV4BIQYytL3MDA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNg--/https://media.zenfs.com/en/hypebae_340/17fc353e499d5f4f1f310924a5a2bf5c",
                    }}
                    style={{ height: 200, position: "relative" }}
                />
                <View
                    style={{
                        position: "absolute",
                        justifyContent: "center",
                        alignItems: "center",
                        height: 200,
                        width: "100%",
                        zIndex: 100,
                    }}
                >
                    <Text
                        style={{
                            color: "white",
                            fontSize: 18,
                            fontWeight: "700",
                        }}
                    >
                        FASHION COLLECTION
                    </Text>
                    <TouchableOpacity
                        style={{
                            backgroundColor: "white",
                            paddingVertical: 7,
                            paddingHorizontal: 15,
                            marginTop: 10,
                        }}
                        onPress={() => {}}
                    >
                        <Text style={{ color: "black", fontSize: 14 }}>
                            SHOP NOW
                        </Text>
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        backgroundColor: "rgba(0, 0, 0, 0.3)",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        zIndex: 1,
                    }}
                />
            </View>
            <View>
                <Image
                    source={{
                        uri: "https://trendygolf.com/cdn/shop/collections/1664279126.9818428-Brand_DESK-jl_womens_page.png?v=1683714697",
                    }}
                    style={{ height: 200, position: "relative" }}
                />
                <View
                    style={{
                        position: "absolute",
                        justifyContent: "center",
                        alignItems: "center",
                        height: 200,
                        width: "100%",
                        zIndex: 100,
                    }}
                >
                    <Text
                        style={{
                            color: "white",
                            fontSize: 18,
                            fontWeight: "700",
                        }}
                    >
                        TENNIS COLLECTION
                    </Text>
                    <TouchableOpacity
                        style={{
                            backgroundColor: "white",
                            paddingVertical: 7,
                            paddingHorizontal: 15,
                            marginTop: 10,
                        }}
                        onPress={() => {}}
                    >
                        <Text style={{ color: "black", fontSize: 14 }}>
                            SHOP NOW
                        </Text>
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        backgroundColor: "rgba(0, 0, 0, 0.3)",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        zIndex: 1,
                    }}
                />
            </View>
        </View>
    );
}
