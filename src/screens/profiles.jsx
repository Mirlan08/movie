
import { createRoutesFromChildren } from "react-router-dom";
import { useState } from "react";
import { users } from "../testapi";
import { useEffect } from "react";
import Footer from "../components/footer";




function Profil() {
    const [userProperty, setUserProperty] = useState(null);
    const local = localStorage.getItem('token');
    const userDetails = () => {
        const user = users.filter(i => i.id == local);
        if (user.length > 0) {
            setUserProperty(user[0]);
        }
    }
    useEffect(() => {
        userDetails();
    }, [])
    return (
        <div>
            <div className="container-fluid">
                <div className="row>">
                    <div className="col-12">
                        <div className="row">
                            <div className="col-3 bg-secondary"></div>
                            <div className="col-6 mt-3">

                                <div className="row">
                                    <div className="col-12 lich">
                                        <h3 className="text-warning">Личные данные</h3>
                                        {userProperty != null ?
                                            <img src={userProperty.avatar} width="100px" height="100px"></img>


                                            :
                                            <></>

                                        }   <h5> {userProperty != null ?
                                            <>
                                                {userProperty.fullname}
                                            </>
                                            :
                                            <>



                                            </>



                                        }
                                        </h5>

                                        <h5>Главное</h5>
                                        <p>Дата рождение: {
                                            userProperty != null ?
                                                <>
                                                    {userProperty.date}
                                                </>
                                                :
                                                <>
                                                </>
                                        }</p>
                                        <p>Пол: {
                                            userProperty != null ?
                                                <>
                                                    {userProperty.sex}
                                                </>
                                                :
                                                <>
                                                </>
                                        }


</p>
                                        <p>
                                            Контакты: {
                                                userProperty != null ?
                                                    <>
                                                        {userProperty.contact}
                                                    </>
                                                    :
                                                    <>
                                                    </>
                                            }
                                        </p>
                                        <p>
                                            Почта: {
                                                userProperty != null ?
                                                    <>
                                                        {userProperty.mail}
                                                    </>
                                                    :
                                                    <>
                                                    </>
                                            }
                                        </p>


                                    </div>
                                  <a href="/"className="glav">Главное</a>
                                </div>
                                
                            </div>
                            <div className="col-3 bg-secondary"></div>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />

        </div>

    )
}
export default Profil;
