import React from 'react'
import CartItem from './CartItem'
import './cartStyle.css'

class CartExample extends React.Component{
    state = {
        cartItems:[
            {"id":1, "name":"Pizza", "qty":0, "price":100, "total":0},
            {"id":2, "name":"Burger", "qty":0, "price":200, "total":0},
            {"id":3, "name":"Sandwich", "qty":0, "price":60, "total":0},
            {"id":4, "name":"Chacken roll", "qty":0, "price":150, "total":0},
            {"id":5, "name":"Cheaken wings", "qty":0, "price":150, "total":0},

        ]
    }

    
    increase = (cart) =>{
        console.log("calling")
        console.log(cart)

        cart.qty = cart.qty+1
        this.setState({cartItems: this.state.cartItems});
        this.setState({total:this.state.total});
        //var newQty = this.state.qty + 1;
        //this.setState({qty: newQty})
        //console.log(newQty);
        //this.setState({total: newQty * this.state.price});
    };

    decrease = (cart) =>{
        console.log("decrease Item")
        if(cart.qty > 0){
            cart.qty = cart.qty - 1
            this.setState({cartItems: this.state.cartItems});
            this.setState({total: this.state.total});
            
        }

    };

    render() {
        return(
            <React.Fragment>
                <h1>Cart Component Example for React Js</h1>
                <table border="1">
                    <tr>
                        <td>Item</td>
                        <td>Price</td>
                        <td>Quantity</td>
                        <td>Total</td>
                        <td>Action</td>
                    </tr>
                    {this.state.cartItems.map((cart)=>(
                        <CartItem cart = {cart} onIncrease={this.increase} onDecrease={this.decrease} />
                    ))}
                    <tr>
                        <th colSpan="2">Total Amount</th>
                        <th>{this.state.cartItems.reduce((total, cart)=> total +(cart.qty * cart.price), 0)}</th>
                        <th>Quantity</th>
                        <th>{this.state.cartItems.reduce((total, cart)=> total + cart.qty, 0)}</th>
                    </tr>
                </table>

            </React.Fragment>

        )
    }
}

export default CartExample