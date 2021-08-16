import React, {Component} from "react";
export default class Currencies extends Component {
    constructor() {
      super();
      this.state = { currencies: [] };
    }

    componentDidMount() {
        fetch(
          "http://localhost:5050/api/currency/"
        )
          .then((res) => {
            return res.json();
          })
          .then((body) => {
            console.log(body);
            this.setState({
              currencies: body
            });
          });
      }

      render() {
          return (
        <section>
          <h1>Products List</h1>
          <div>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                </tr>
              </thead>
              <tbody>
                {this.state.currencies.map((c, index) => {
                  return (
                    <tr key={index}>
                      <td> {c.id}</td>
                      <td>{c.title}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
             </div>
          <div>
          </div>
        </section>
      );
}}
