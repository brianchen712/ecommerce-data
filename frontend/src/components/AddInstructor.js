import axios from "axios";
import React from "react";
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Link } from "react-router-dom";

toast.configure();

class AddInstructor extends React.Component{
    handleSubmit(event){
        event.preventDefault();
        
        // 表單處理
        var formData = new FormData();
        formData.append('fullName', this.fullName);
        formData.append('email', this.email);
        formData.append('education', this.education);
        formData.append('experience', this.experience);
        formData.append('image', this.image);

        // 檔案上傳需增加此header
        var headers = {"Content-Type": "multipart/form-data"}
        axios.post('/api/instructor',formData,{headers: headers})
        .then(res=>{
            toast("新增成功!",{autoClose:2000,position:toast.POSITION.BOTTOM_CENTER})
        })
    }
    render(){
        return(
        <div class="container">
            <h2>講師資料</h2>
            <form class="row g-3">
                <div class="col-md-6">
                    <label for="fullName" class="form-label">姓名</label>
                    <input type="text" class="form-control" id="fullName" onChange={(event=>this.fullName=event.target.value)}/>
                </div>
                <div class="col-md-6">
                    <label for="image" class="form-label">圖片</label>
                    <input type="file" class="form-control" id="image" onChange={(event=>this.image=event.target.files[0])}/>
                </div>
                <div class="col-md-6">
                    <label for="email" class="form-label">信箱</label>
                    <input type="text" class="form-control" id="email" onChange={(event=>this.email=event.target.value)}/>
                </div>
                <div class="col-md-6">
                    <label for="education" class="form-label">學歷</label>
                    <input type="text" class="form-control" id="education" onChange={(event=>this.education=event.target.value)}/>
                </div>
                <div class="col-12">
                    <label for="experience" class="form-label">工作經驗</label>
                    <textarea rows="4" cols="50" class="form-control" id="experience" onChange={(event=>this.experience=event.target.value)}/>
                </div>
                <button class="btn btn-primary mt-3 mb-5" onClick={this.handleSubmit.bind(this)}>確認</button>
            </form>
            <Link to={'/'}><button type="button" class="btn btn-dark"><font size="5">回前頁</font></button></Link>
        </div>)
    }
}

export default AddInstructor;