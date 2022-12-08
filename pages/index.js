import React from 'react';
import MainContainer from "../components/MainContainer";
import {useDispatch, useSelector} from "react-redux";

const Main = () => {
    const dispatch = useDispatch();
    const cash = useSelector(state => state.cash);

    const addCash = (cash) => {
        dispatch({type: "ADD_CASH", payload: cash});
    }

    const getCash = (cash) => {
        dispatch({type: "GET_CASH", payload: cash});
    }

    return (
        <MainContainer keywords='main page'>
            <h1>Главная страница</h1>
            <div>{cash}</div>
            <div>
                <button onClick={() => {addCash(Number(prompt()))}}>Пополнить счет</button>
                <button onClick={() => {getCash(Number(prompt()))}}>Снять со счета</button>
            </div>
        </MainContainer>
    );
};

export default Main;