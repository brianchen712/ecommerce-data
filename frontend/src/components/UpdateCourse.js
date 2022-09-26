import axios from "axios";
import React from "react";
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Link } from "react-router-dom";

toast.configure();

class UpdateCourse extends React.Component{

    state={}

    componentWillMount(){
        axios.get('/api/course/c/' + this.props.match.params.courseId).then(res=>{
            this.setState(res.data);
        })
    }

    handleSubmit(event){
        event.preventDefault();
        
        // 表單處理
        var formData = new FormData();
        formData.append('courseId', this.props.match.params.courseId);
        formData.append('name', this.state.name);
        formData.append('description', this.state.description);
        formData.append('courseTypeId', this.state.courseTypeId);
        formData.append('price', this.state.price);
        formData.append('discountPrice', this.state.discountPrice);

        axios.put('/api/course',formData)
        .then(res=>{
            toast("更新成功!",{autoClose:2000,position:toast.POSITION.BOTTOM_CENTER})
        })
    }

    updateName(event) {
        this.setState({
            name: event.target.value 
        });
    }

    updateDescription(event) {
        this.setState({
            description: event.target.value 
        });
    }

    updateCourseType(event) {
        this.setState({
            courseTypeId: event.target.value 
        });
    }

    updatePrice(event) {
        this.setState({
            price: event.target.value 
        });
    }

    updateDiscountPrice(event) {
        this.setState({
            discountPrice: event.target.value 
        });
    }

    render(){
        return(
        <div class="container">
            <h2>課程資料</h2>
            <form class="row g-3">
                <div class="col-md-6">
                    <label for="name" class="form-label">名稱</label>
                    <input type="text" class="form-control" id="name" value={this.state.name} onChange={this.updateName.bind(this)}/>
                </div>
                <div class="col-md-6">
                    <label for="image" class="form-label">圖片</label>
                    <br/>
                    <img src={`data:image/jpeg;base64,${this.state.image}`} alt=""/>
                </div>
                <div class="col-12">
                    <label for="description" class="form-label">簡介</label>
                    <textarea rows="4" cols="50" class="form-control" id="description" value={this.state.description} onChange={this.updateDescription.bind(this)}/>
                </div>
                <div class="col-md-6">
                    <label for="courseType" class="form-label">資料類別</label>
                    <select id="courseType" class="form-control" value={this.state.courseTypeId} onChange={this.updateCourseType.bind(this)}>
                        <option value="1" selected >前端</option>
                        <option value="2">資料庫</option>
                        <option value="3">後端</option>
                    </select>
                </div>
                <div class="col-md-3">
                    <label for="price" class="form-label">原價</label>
                    <input type="text" class="form-control" id="price" value={this.state.price} onChange={this.updatePrice.bind(this)}/>
                </div>
                <div class="col-md-3">
                    <label for="discountPrice" class="form-label">折扣後價錢</label>
                    <input type="text" class="form-control" id="discountPrice" value={this.state.discountPrice} onChange={this.updateDiscountPrice.bind(this)}/>
                </div>
                <button class="btn btn-primary mt-3 mb-5" onClick={this.handleSubmit.bind(this)}>確認</button>
            </form>
            <Link to={'/courseContent/' + this.state.instructorId}><button type="button" class="btn btn-dark"><font size="5">回前頁</font></button></Link>
        </div>)
    }
}

export default UpdateCourse;