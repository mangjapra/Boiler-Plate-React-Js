import { applyMiddleware, createStore } from "redux";
import "./App.css";
import LayoutBoiler from "./pages/layout";
import { allReducer } from "./store";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

const store = createStore(allReducer, applyMiddleware(thunk));
store.subscribe(() => console.log("subscribe: ", store.getState()));

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <LayoutBoiler />
      </Provider>
    </div>
  );
}

export default App;
