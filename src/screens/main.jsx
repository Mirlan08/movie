import Footer from "../components/footer";
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import { tests } from "../testapi";


const Main = () => {
    const test = tests;




    return (
        <div className="obwak">
            <Header />
            <div className="row">
                <div className="col-lg-2">
                    <Sidebar />
                </div>
                <div className="col-lg-10 colum">
                    <h3 >Популярные онлайн тесты </h3>
                    <div className="row">
                        {test.map((item) =>

                            <>
                                
                                <div className="col-lg-4">
                                    <div class="card">
                                        
                                        <img src={item.photo} height="200px" class="card-img-top" />
                                        <div class="card-body bg-info">
                                            <h5 class="card-title">{item.title}</h5>
                                            <p class="card-text">Количество прохождений:159 </p>
                                            <p class="card-text">363 просмотров - 09 декабря 2022 </p>
                                            <a href={"/test1/" + item.id + "/" + 0} class="btn btn-warning mb-3">Пройти тест</a>
                                        </div>
                                    </div>
                                    <br></br>
                                </div>
                                
                                
                            </>
                        )}
                    </div>
                    
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default Main;