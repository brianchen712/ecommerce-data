import axios from "axios";
import React from "react";
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Link } from "react-router-dom";

toast.configure();

class UpdateInstructor extends React.Component{

    state={}

    componentWillMount(){
        axios.get('/api/instructor/' + this.props.match.params.instructorId).then(res=>{
            this.setState(res.data);
        })
    }

    handleSubmit(event){
        event.preventDefault();
        
        // 表單處理
        var formData = new FormData();
        formData.append('id', this.props.match.params.instructorId);
        formData.append('fullName', this.state.fullName);
        formData.append('email', this.state.email);
        formData.append('education', this.state.education);
        formData.append('experience', this.state.experience);

        axios.put('/api/instructor',formData)
        .then(res=>{
            toast("更新成功!",{autoClose:2000,position:toast.POSITION.BOTTOM_CENTER})
        })
    }

    updateFullName(event) {
        this.setState({
            fullName: event.target.value 
        });
    }

    updateEmail(event) {
        this.setState({
            email: event.target.value 
        });
    }

    updateEducation(event) {
        this.setState({
            education: event.target.value 
        });
    }

    updateExperience(event) {
        this.setState({
            experience: event.target.value 
        });
    }


    render(){
        return(
        <div class="container">
            <h2>講師資料</h2>
            <form class="row g-3">
                <div class="col-md-6">
                    <label for="fullName" class="form-label">姓名</label>
                    <input type="text" class="form-control" id="fullName" value={this.state.fullName} onChange={this.updateFullName.bind(this)}/>
                </div>
                <div class="col-md-6">
                    <label for="image" class="form-label">圖片</label>
                    <br/>
                    <img src={`data:image/jpeg;base64,${this.state.image}`} alt=""/>
                </div>
                <div class="col-md-6">
                    <label for="email" class="form-label">信箱</label>
                    <input type="text" class="form-control" id="email" value={this.state.email} onChange={this.updateEmail.bind(this)}/>
                </div>
                <div class="col-md-6">
                    <label for="education" class="form-label">學歷</label>
                    <input type="text" class="form-control" id="education" value={this.state.education} onChange={this.updateEducation.bind(this)}/>
                </div>
                <div class="col-12">
                    <label for="experience" class="form-label">工作經驗</label>
                    <textarea rows="4" cols="50" class="form-control" id="experience" value={this.state.experience} onChange={this.updateExperience.bind(this)}/>
                </div>
                <button class="btn btn-primary mt-3 mb-5" onClick={this.handleSubmit.bind(this)}>確認</button>
            </form>
            <Link to={'/'}><button type="button" class="btn btn-dark"><font size="5">回前頁</font></button></Link>
        </div>)
    }
}

export default UpdateInstructor;