import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { App } from "components";

import { persistor, store } from "store";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter basename="/redux-todo-app">
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
