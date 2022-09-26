import axios from "axios";
import React from "react";
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Link } from "react-router-dom";

toast.configure();

class AddCourse extends React.Component{
    handleSubmit(event){
        event.preventDefault();
        
        // 表單處理
        var formData = new FormData();
        formData.append('instructorId', this.props.match.params.instructorId);
        formData.append('name', this.name);
        formData.append('image', this.image);
        formData.append('description', this.description);
        formData.append('courseTypeId', this.courseType);
        formData.append('price', this.price);
        formData.append('discountPrice', this.discountPrice);

        // 檔案上傳需增加此header
        var headers = {"Content-Type": "multipart/form-data"}
        axios.post('/api/course',formData,{headers: headers})
        .then(res=>{
            toast("新增成功!",{autoClose:2000,position:toast.POSITION.BOTTOM_CENTER})
        })
    }
    render(){
        return(
        <div class="container">
            <h2>課程資料</h2>
            <form class="row g-3">
                <div class="col-md-6">
                    <label for="name" class="form-label">名稱</label>
                    <input type="text" class="form-control" id="name" onChange={(event=>this.name=event.target.value)}/>
                </div>
                <div class="col-md-6">
                    <label for="image" class="form-label">圖片</label>
                    <input type="file" class="form-control" id="image" onChange={(event=>this.image=event.target.files[0])}/>
                </div>
                <div class="col-12">
                    <label for="description" class="form-label">簡介</label>
                    <textarea rows="4" cols="50" class="form-control" id="description" onChange={(event=>this.description=event.target.value)}/>
                </div>
                <div class="col-md-6">
                    <label for="courseType" class="form-label">資料類別</label>
                    <select id="courseType" class="form-control" onChange={(event=>this.courseType=event.target.value)}>
                        <option value="1" selected >前端</option>
                        <option value="2">資料庫</option>
                        <option value="3">後端</option>
                    </select>
                </div>
                <div class="col-md-3">
                    <label for="price" class="form-label">原價</label>
                    <input type="text" class="form-control" id="price" onChange={(event=>this.price=event.target.value)}/>
                </div>
                <div class="col-md-3">
                    <label for="discountPrice" class="form-label">折扣後價錢</label>
                    <input type="text" class="form-control" id="discountPrice" onChange={(event=>this.discountPrice=event.target.value)}/>
                </div>
                <button class="btn btn-primary mt-3 mb-5" onClick={this.handleSubmit.bind(this)}>確認</button>
            </form>
            <Link to={'/courseContent/' + this.props.match.params.instructorId}><button type="button" class="btn btn-dark"><font size="5">回前頁</font></button></Link>
        </div>)
    }
}

export default AddCourse;