import '../styles/global.css'
import {Provider, ProviderProps} from "react-redux";
import store from "../redux/store";

export default function MyApp({ Component, pageProps }) {
    return(<Provider store={store}>
            <Component {...pageProps} />
    </Provider>)

}