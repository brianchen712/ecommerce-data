import React from "react";
import axios from "axios";
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Link } from "react-router-dom";

toast.configure();

class CourseContent extends React.Component{

    state={
        courseData:[],
        instructorId: this.props.match.params.instructorId
    }

    componentWillMount(){
        axios.get('/api/course/i/' + this.state.instructorId).then(res=>{
            const courseData = res.data;
            this.setState({courseData});
        })
    }

    render(){
        return(
        <div class="container">
            <h2>課程:</h2>
            <br/>
            <table class="table table-bordered table-striped">
                <thead class="text-start">
                    <tr>
                        <th>編號</th>
                        <th></th>
                        <th>名稱</th>
                        <th>簡介</th>
                        <th>課程類別</th>
                        <th>原價</th>
                        <th>折扣後價錢</th>
                    </tr>
                </thead>
                <tbody class="text-start">
                    {this.state.courseData.map(course=><RowCreator item={course}/>)}
                </tbody>
            </table>
            <br/>
            <Link to={'/addCourse/' + this.state.instructorId}><button type="button" class="btn btn-dark"><font size="5">增加課程資料</font></button></Link>
            <br/><br/>
            <Link to={'/'}><button type="button" class="btn btn-dark"><font size="5">回前頁</font></button></Link>
        </div>
        )
    }
}
class RowCreator extends React.Component{

    removeCourse(id,event){
        event.preventDefault();
        
        axios.delete('/api/course/'+id)
        .then(res=>{
            window.location.reload(false); 
            axios.get('/api/course/i/'+ this.state.instructorId).then(res=>{
                const courseData = res.data;
                this.setState({courseData});
            })
        })
    }

    render(){
        var course = this.props.item;
        return(<tr>
            <td>{course.id}</td>
            <td><img src={`data:image/jpeg;base64,${course.image}`} alt=""/></td>
            <td>{course.name}</td>
            <td>{course.description}</td>
            <td>{course.courseTypeName}</td>
            <td>{course.price}</td>
            <td>{course.discountPrice}</td>
            <td colspan="2">
                <Link to={'/updateCourse/' + course.id}><button type="button" class="btn btn-secondary m-1">更新課程資料</button></Link>
                <br/>
                <button class="btn btn-danger m-1" onClick={this.removeCourse.bind(this, course.id)}>移除課程資料</button>
            </td> 
        </tr>)
    }
}

export default CourseContent;