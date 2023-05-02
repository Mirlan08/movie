
import { useState } from 'react';
import React from 'react';
import {message} from "antd";
import { users } from "../testapi";
const Enter = () => {
    const [login, setlogin1] = useState();
    const [password, setpassword2] = useState();


    const SingIn = () => {
        if (login != "" && password != "") {
            const user = users.filter(i => i.login == login && i.password == password);
            if (user.length > 0) {
                localStorage.setItem('token', user[0].id);
                window.location.href = "/";

                message.success('Добро пожаловать');
            }
            else {
                message.error('Не правильный логин или пароль');
            }
        }else{
            message.warning('Заполните поля');
            
        }

    }

    return (
        
            <div className="col-lg-4">
            <div className="box">
                
            
                    <div className="col-lg-12 box1 mt-5">
                        <h3 className="text-white"><b>ONLINE TEST</b></h3>
                    </div>

                    <div className="col-lg-12 mt-3">
                        <div className="row">
                            <div className="col-2"></div>
                            <div className="col-8">
                                <input type="text" className="form-control" placeholder="E-mail" onChange={(e) => { setlogin1(e.target.value); }} />
                            </div>
                            <div className="col-2"></div>

                        </div>
                    </div>
                    <div className="col-12 mt-3">
                        <div className="row">
                            <div className="col-2"></div>
                            <div className="col-8">
                                <input type="text" className="form-control"placeholder="пароль" onChange={(e) => { setpassword2(e.target.value); }} />
                            </div>
                            <div className="col-2"></div>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-2"></div>
                        <div className="col-8">
                            <div className="row">
                                <div className="col-6 hreff text-white">
                                    <input  type="checkbox"></input>запомнить меня
                                </div>
                                <div className="col-6 ">
                                    <a href="" className="reg text-white ">забыли пароль?</a>
                                </div>
                            </div>


                        </div>
                        <div className="col-2"></div>
                    </div>


                    <div className="col-12 mt-3">
                        <button className="vx " onClick={SingIn}>войти</button>
                    </div>
                    <div className="col-12 mt-3 text-warning">
                        Нет аккаунта?<br></br>
                            Пожалуйста,пройдите<a href="/registor" className="reg text-white"> регистрацию</a>
                        
                    </div>
                </div>
          
            
        </div>
    );
}
export default Enter;