import React, {Component} from "react";

export default class Wallets extends Component {
    constructor () {
        super ();
        this.state = {wallets:[]};
    }

    componentDidMount(){
        fetch('http://localhost:5050/api/wallet/leadid?leadId=56f58616-e09d-4183-a1ec-e8f3c4fe5c16')
        .then((res) => {
            return res.json();
        })
        .then((body) => {
            console.log(body);
            this.setState({
                wallets: body
            });
        });
    }

    render() {
            return(
                <section>  
                    <h1>Products List</h1>  
                        <div>  
                            <table>  
                                <thead><tr><th>Currency</th><th>Amount</th></tr></thead>  
                                <tbody>  
                                    {  
                                        this.state.wallets.map((w, index) => {  
                                            return <tr key={index}><td> {w.currency}</td><td>{w.amount}</td></tr>;  
                                        })  
                                    }  
                                </tbody>  
                            </table>  
                        </div>  
                </section> 
            )
    }
}