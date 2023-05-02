import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom"
import { users } from "../testapi"
function Header() {
    const local = localStorage.getItem('token');
    // if(local == null){
    //     window.location.href = '/';
    // }

    const [userProperty, setUserProperty] = useState(null);
    const userDetails = () => {
        const user = users.filter(i => i.id == local);
        if (user.length > 0) {
            setUserProperty(user[0]);
        }
    }
    const Logout = () => {
        localStorage.removeItem('token');
        window.location.href = '/';
    }
    useEffect(() => {
        userDetails();
    }, [])
    return (
        <div>
            <div className="row">
                <div className="col-lg-12  header">
                    <div className="row">
                        <div className="col-lg-3">
                            <a href="/"  > <h1 className="href" >TEST ONLINE</h1></a>
                        </div>
                        
                        <div className=" col-lg-5"></div>
                        
                        <div className=" col-lg-4 test">
                            <div className="row">
                                <div className="col-lg-3 pol">
                                    <div className="row">
                                    <div className="col-lg-4">
                                    {userProperty != null ?
                                    <img src={userProperty.avatar} width="45px" height="45px"></img>
                                    :<></>
                                    }
                                    </div>
                                    <div className="col-lg-6">
                                        <a href="/profiles">
                                    {userProperty != null ?
                                        <>
                                            <h4 className="text-danger ">{userProperty.login}</h4>
                                        </>
                                        :
                                        <>


                                        </>
                                     
                                    }</a>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-lg-8">

                                    {local == null ?
                                        <>
                                            <a href="/vxod" ><h4 className="href" >Вход/Регистрация</h4></a>
                                        </>
                                        :
                                        <>



                                            <a href="#" onClick={Logout}><h4 className="href">выйти</h4></a>

                                        </>



                                    }
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header;

