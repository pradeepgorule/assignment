import React, { Component } from 'react';
import { getMethod } from '../API/API'

class ItemList extends Component {
    constructor(props) {
        super(props);
        this.state = {
 
        }
    }
    deleteItem = (id) => {
        this.props.DeleteData(id)
    }
    updateData=(obj)=>{
        this.props.UpdateValue(obj)
    }
    displayData = () => {
        console.log(this.props.List)
        return (this.props.List.map((data, indx) => {
            return (
                <tr key={indx}>
                    <td>{indx + 1}</td>
                    <td>{data.name}</td>
                    <td>{data.desc}</td>
                    <td>{data.price}</td>
                    <td><img src={data.img} style={{ width: '100px', }} /></td>
                    <td><button className="btn btn-danger" onClick={() => this.updateData(data)}>Update</button></td>
                    <td><button className="btn btn-danger" onClick={() => this.deleteItem(data.id)}>Delete</button></td>
                </tr>
            )
        }))
    }

 
    render() {
        return (
            <>
                <div>
                    <table className="table">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">Sr No</th>
                                <th scope="col">Product Name</th>
                                <th scope="col">Description</th>
                                <th scope="col">Price</th>
                                <th scope="col">Product</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.displayData()}
                        </tbody>

                    </table>
                </div>
            </>
        );
    }
}

export default ItemList;