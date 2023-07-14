import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./navigations/TabNavigator";
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    gql,
} from "@apollo/client";
import LogoScreen from "./components/LogoScreen";
import { useEffect, useState } from "react";

const client = new ApolloClient({
    uri: "https://c2.challengeone.site",
    cache: new InMemoryCache(),
});

export default function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const simulateAsyncTask = () => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve();
                }, 2000);
            });
        };

        simulateAsyncTask().then(() => {
            setLoading(false);
        });
    }, []);

    if (loading === true) {
        return <LogoScreen />;
    }

    return (
        <ApolloProvider client={client}>
            <NavigationContainer>
                <TabNavigator />
            </NavigationContainer>
        </ApolloProvider>
    );
}
