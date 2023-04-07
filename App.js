import React from "react";
import AppNavigator from './src/navigations/AppNavigator'
import { Provider } from "react-redux";
import { mystore } from "./redux/store/store";

export default function App(){
  return(
  <Provider store={mystore}>
     <AppNavigator />
       </Provider>
  );
}