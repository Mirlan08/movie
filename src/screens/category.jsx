
import { useParams } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import { tests } from "../testapi";




const Category = () => {
    const params = useParams();
    const categories_id = params.id;
    const categories = tests.filter(i => i.categories_id == categories_id);

    return (
        <div>
            <Header />
            <div className="row ">
                <div className="container colum">
                    <div className="row">
                        <div className="col-lg-3">
                            <Sidebar />
                        </div>
                        <div className="col-lg-9">
                            <div className="row">
                                {categories.map((item) =>
                                    <div className="col-lg-4 ">
                                        <div class="card">
                                            <img src={item.photo} height="200px" class="card-img-top" />
                                            <div class="card-body">
                                                <h5 class="card-title">{item.title}</h5>
                                                <p class="card-text">Количество прохождений:159 </p>
                                                <p class="card-text">363 просмотров - 09 декабря 2022 </p>

                                                <div class="col-12">
                                                    <a href={"/test1/" + item.id + "/" + 0} class="btn btn-warning mb-3">пройти тест</a>
                                                </div>

                                            </div>

                                            
                                        </div>
                                    </div>

                                )}
                            </div>
                            
                        </div>
                    </div>
                    <br></br><br></br><br></br><br></br><br></br><br></br>
                </div>
                
                </div>
                
                <Footer/>
            </div>
            )
}
            export default Category;