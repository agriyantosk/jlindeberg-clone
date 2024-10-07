import { Button, Text, View } from "react-native";

export default function ShopHeaders() {
    return (
        <View>
            <View
                style={{
                    padding: 20,
                    alignItems: "center",
                }}
            >
                <Text
                    style={{
                        fontSize: 18,
                    }}
                >
                    SHOP
                </Text>
            </View>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    borderWidth: 1,
                    borderStyle: "solid",
                    borderColor: "grey",
                    paddingVertical: 5,
                }}
            >
                <Text>FILTER</Text>
                <View
                    style={{
                        height: "100%",
                        width: 1,
                        backgroundColor: "black",
                    }}
                ></View>
                <Text>SORT</Text>
            </View>
        </View>
    );
}
