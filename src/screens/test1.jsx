import { useState } from "react";
import { useParams } from "react-router-dom";
import {message} from 'antd';
import { questions } from "../testapi";
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import Footer from "../components/footer";




function Test1() 
{
    const params = useParams();
    const test_id = params.id;
    const question_id = params.q;
    const [index, setIndex] = useState(question_id);
    const test = questions.filter(i => i.test_id == test_id);
    const local = localStorage.getItem('points');
    if (test[question_id] == undefined) {
        window.location.href = "/rezult";
    }
    const Check = (value) => {
        if (value == true)
         {
            if (local != null) {
                localStorage.setItem('points', (parseInt(local) + 10))
            }
            else {
                localStorage.setItem('points', 10)
            }
            message.success('Ответ верный');
              setTimeout(()=>{window.location.href="/test1/"+test_id+"/"+(parseInt(question_id)+1);},2000);

        } 
        else {

            message.error('Ответ неверный');
                  setTimeout(()=>{window.location.href="/test1/"+test_id+"/"+(parseInt(question_id)+1);},2000);
        }
    }
    return (
        <div className="obwak">
            <Header />
            <div className="row">
                <div className="col-lg-2">
                    <Sidebar/>
                </div>
                <div className="col-lg-7 colum ">
                    <div className="col-12 bg-white">
                        <h4>{test[index].title}</h4>
                        <p></p>
                    </div>
                    <div className="col-lg-12">
                     

                        <h3>{test[index].description}</h3>
                        <img className="php" src={test[index].photo} /> <br></br><br></br>
                        Варианты ответов:<br></br>
                      <h4>  {test[index].answers.map((item) =>
                            <>
                                <input type="radio" name="radio" onChange={() => { Check(item.status) }}></input><b>{item.title}</b><br></br>
                            </>
                        )}</h4>

                    </div>
                </div>
                

                <div className="col-2">
                    реклама
                </div>
            </div>
            <br></br>
            <Footer />
        </div>

    );
}
export default Test1;