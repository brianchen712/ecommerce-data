import React from "react";
import axios from "axios";
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Link } from "react-router-dom";

toast.configure();

class Home extends React.Component{

    state={
        instructorData:[]
    }

    componentWillMount(){
        axios.get('api/instructor').then(res=>{
            const instructorData = res.data;
            this.setState({instructorData});
        })
    }

    render(){
        return(
        <div class="container">
            <h2>講師:</h2>
            <br/>
            <table class="table table-bordered table-striped">
                <thead class="text-start">
                    <tr>
                        <th>編號</th>
                        <th></th>
                        <th>姓名</th>
                        <th>學歷</th>
                        <th>工作經驗</th>
                        <th>信箱</th>
                    </tr>
                </thead>
                <tbody class="text-start">
                    {this.state.instructorData.map(instructor=><RowCreator item={instructor}/>)}
                </tbody>
            </table>
            <br/>
            <Link to={'/addInstructor'}><button type="button" class="btn btn-dark"><font size="5">增加講師資料</font></button></Link>
        </div>
        )
    }
}
class RowCreator extends React.Component{

    removeInstructor(id,event){
        event.preventDefault();
        
        axios.delete('/api/instructor/'+id)
        .then(res=>{
            window.location.reload(false); 
            axios.get('api/instructor').then(res=>{
                const instructorData = res.data;
                this.setState({instructorData});
            })
        })
    }

    render(){
        var instructor = this.props.item;
        return(<tr>
            <td>{instructor.id}</td>
            <td><img src={`data:image/jpeg;base64,${instructor.image}`} alt=""/></td>
            <td>{instructor.name}</td>
            <td>{instructor.education}</td>
            <td dangerouslySetInnerHTML={{__html: instructor.experience}}></td>
            <td>{instructor.email}</td>
            <td colspan="3">
                <Link to={'/courseContent/' + instructor.id}><button type="button" class="btn btn-primary m-1">顯示課程</button></Link>
                <br/>
                <Link to={'/updateInstructor/' + instructor.id}><button type="button" class="btn btn-secondary m-1">更新講師資料</button></Link>
                <br/>
                <button class="btn btn-danger m-1" onClick={this.removeInstructor.bind(this, instructor.id)}>移除講師資料</button>
            </td> 
        </tr>)
    }
}

export default Home;