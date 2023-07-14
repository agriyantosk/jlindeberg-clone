import "./App.css";
import router from "./routes";
import { RouterProvider } from "react-router";
import { Provider } from "react-redux";
import store from "./store";

function App() {
    return (
        <>
            <div className="ml-64">
                <Provider store={store}>
                    <RouterProvider router={router} />
                </Provider>
            </div>
        </>
    );
}

export default App;
