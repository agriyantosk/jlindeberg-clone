// import './App.css'
import { RouterProvider } from "react-router";
import { Provider } from "react-redux";
import router from "./routes";
import "./index.css";
import store from "./store";

function App() {
    return (
        <>
            <Provider store={store}>
                <RouterProvider router={router} />
            </Provider>
        </>
    );
}

export default App;
