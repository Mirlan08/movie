
function Registor() {
    return (
        <div>
            <div className="container-fluid fonn" style={{ height: "1000px" }}>
                <div className="row">
                    <div className="container">
                        <div className="regbox">
                            <h3 className="regis text-white ">Регистрация</h3>
                            <h6 className="text-white"> Имя:<input type="text" placeholder="Введите свое имя" className="form-control"></input></h6><br></br>
                            <h6 className="text-white" > Фамилия:<input type="text" placeholder="Введите фамилию" className="form-control"></input></h6><br></br>
                            <h6 className="text-white"> Логин:<input type="text" placeholder="Введите логин" className="form-control"></input></h6><br></br>
                            <h6 className="text-white"> Пароль:<input type="text" placeholder="Введите пароль" className="form-control"></input></h6>
                            <button className="btnreg">Зарегистрироваться</button>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}
export default Registor;
