//메인화면을 담당하는 라우트

import { useLocation } from 'react-router-dom'

import Content from "../components/Main/Content";
import Header from "../components/Main/Header";
import OrderComplete from "../components/Main/OrderComplete";
import OrderCanceled from "../components/Main/OrderCanceled";
import Footer from "../components/Footer";



export default function Main() {
  const {state} :any = useLocation();
  const id = state.idFromLogin;
    return (
      <>
        <h1>id : {id}</h1>
      </>
    );
  }
  