import { categories } from "../testapi";

const Sidebar = () => {
    const category = categories;
    return (
        <div>
            <div className="row ">
                <div className="container lg-8 colum">
                    {category.map((item) =>
                        <div className="col-12 intest">
                            
                                
                                  <h3>{item.description}</h3>

                                  <div class="col-12 intest">
                                     <a href={"/category/"+item.id} className="intest"><h6>{item.title}</h6></a>
                                  </div>
                                    
                                

                            

                        </div>
                    )}

                </div>
            </div>

        </div>
    )
}
export default Sidebar