import React, {Component} from "react";

export default class Google extends Component {
    constructor () {
        super ();
        this.state = {currency:[]};
    }

    componentDidMount(){
        fetch('http://localhost:5050/api/currency')
        .then((res) => {
            return res.json();
        })
        .then((body) => {
            console.log(body);
            this.setState({
                currency: body
            });
        });
    }

    render() {
            return(
                <section>  
                    <h1>Google 2fa</h1>  
                        <div>  
                            <table>  
                                <thead><tr><th><pre>User   </pre></th><th>Something</th></tr></thead>  
                                <tbody>  
                                    {  
                                        this.state.wallets.map((c, index) => {  
                                            return <tr key={index}><td> {c.ID}</td><td>{c.Title}</td></tr>;  
                                        })  
                                    }  
                                </tbody>  
                            </table>  
                        </div>  
                </section> 
            )
    }
}