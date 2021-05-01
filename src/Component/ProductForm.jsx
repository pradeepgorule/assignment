import React, { Component } from 'react';
import ItemList from './ItemList'
import { v4 as uuidv4 } from 'uuid';
class ProductForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: null,
            productList: [],
            editFlag: null,
            productName:"",
            description:"",
            price:"",
            file:"",

        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onFileChosen = (e) => {
        var fileName = e.target.value;
        var idxDot = fileName.lastIndexOf(".") + 1;
        var extFile = fileName.substr(idxDot, fileName.length).toLowerCase();
        if (extFile == "jpg" || extFile == "jpeg" || extFile == "png") {
            const reader = new FileReader();
            const img = e.target.files[0]
            reader.onload = this.handleReaderLoad
            reader.readAsDataURL(img);

        } else {
            alert("Only jpg/jpeg and png files are allowed!");

        }





    }
    handleReaderLoad = (e) => {

        this.setState({
            product: e.target.result
        })

    }
    handleNumber = (e) => {   
        const value = e.target.value.replace(/\D/g, "");
        this.setState({ [e.target.name]: value })
    }
    handleSubmit = (e) => {
        e.preventDefault()
  
        if(this.state.productName == "" || this.state.description == "" || this.state.product == "" || this.state.price == ""){
            alert("Please fill all the deatails")
            return false
        }
     
        let obj = {
            id: uuidv4(),
            name: this.state.productName,
            desc: this.state.description,
            price: this.state.price,
            img: this.state.product
        }

        this.setState({
            productList: [...this.state.productList, obj]
        })

    }
    deleteValue = (id) => {
        this.state.productList.filter((data, i) => {

            if (data.id == id) {
                this.state.productList.splice(i, 1)
            }
        })

        this.setState({
            productList: [...this.state.productList]
        })




    }


    updateList = (obj) => {

        this.setState({
            editFlag: obj.id,
            productName: obj.name,
            description: obj.desc,
            price: obj.price,
            product: obj.img
        })


    }
    updateItems = (e) => {
        e.preventDefault()
        let dummyArr = [...this.state.productList]

        for (let i = 0; i < dummyArr.length; i++) {
            debugger
            if (dummyArr[i].id == this.state.editFlag) {
                dummyArr[i].name = this.state.productName;
                dummyArr[i].desc = this.state.description;
                dummyArr[i].price = this.state.price;
                dummyArr[i].img = this.state.product;
            }
        }
        this.setState({
            editFlag: null,
            productList: [...this.state.productList]
        })
    }
    render() {
        return (
            <>
                <div className="container col-md-6">
                    <form className="prd-form">
                    <h4 className="bg-light">Demo Task</h4>
                        <div className="form-group">
                            <label for="name">Name</label>
                            <input type="text" className="form-control" value={this.state.productName} name="productName" onChange={this.handleChange} />
                        </div>
                        <div class="form-group">
                            <label for="description">Description</label>
                            <textarea className="form-control" value={this.state.description} name="description" onChange={this.handleChange}></textarea>
                        </div>
                        <div className="form-group">
                            <label for="price">Price</label>
                            <input type="text" className="form-control" value={this.state.price} name="price" onChange={this.handleNumber} />
                        </div>
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label for="upload">upload</label>
                                <input type="file" className="form-control" value={this.state.file} name="file" onChange={this.onFileChosen} />
                            </div>
                            <div className="form-group col-md-6 " >
                                {
                                    this.state.product !== null ?
                                        <img src={this.state.product} style={{ width: '100px', position: 'absolute' }} alt="Product preview" />
                                        : null
                                }
                            </div>
                        </div>
                        <div className="form-group">
                            {
                                this.state.editFlag !== null ?
                                    <button type="submit" className="btn btn-primary" onClick={this.updateItems}>
                                        Update
                                    </button>
                                    :
                                    <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>
                                        Submit
                                    </button>
                            }

                        </div>
                    </form>
                </div>

                <ItemList List={this.state.productList} DeleteData={this.deleteValue} UpdateValue={this.updateList} />
            </>
        );
    }
}

export default ProductForm;