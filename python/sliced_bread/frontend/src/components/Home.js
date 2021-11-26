import React, { Component } from "react";
import drink from "../assets/drink.jpg";
const {
  uniqueNamesGenerator,
  adjectives,
  colors,
  food,
} = require("unique-names-generator");

export default class Home extends Component {
  getRandomName = () => {
    console.log("name");
    const name = uniqueNamesGenerator({
      dictionaries: [adjectives, food, colors], // colors can be omitted here as not used
      length: 3,
    });
    console.log(name);
    return name;
  };

  render() {
    const name = this.getRandomName();

    return (
      <main className="container">
        <div className="row">
          <div className="col-sm">
            <img
              class="drinkImage"
              className="rounded float-left img-fluid"
              src={drink}
              alt="Logo"
            />
          </div>
          <div className="col-sm d-flex flex-column justify-content-center">
            <h1 className="text-uppercase text-center my-4">
              Bevanda aromatica🍹
            </h1>
            <div className="row">
              <div className="col-md-6 col-sm-10 mx-auto p-0">
                <div className="card p-3">
                  <div className="mb-4">
                    <form>
                      <div class="form-group">
                        <label for="CustomerName">Do you have a name?</label>
                        <input
                          type="text"
                          class="form-control"
                          id="customerName"
                          aria-describedby="customerNameHelp"
                          placeholder={name}
                        ></input>
                      </div>
                    </form>
                    {/* <button className="btn btn-primary">Add task</button> */}
                  </div>
                  {/* {this.renderTabList()} */}
                  {/* <ul className="list-group list-group-flush border-top-0"> */}
                  {/* {this.renderItems()} */}
                  {/* </ul> */}
                </div>
              </div>
            </div>
            <h2
              class="drinkDescription"
              className="font-italic font-weight-light text-center align-self-end"
            >
              Thirsty? Have the Bevanda Aromatica. The perfect flavors for your
              body made by an AI.
            </h2>
            <h1 className="text-center">🤖</h1>
          </div>
        </div>
      </main>
    );
  }
}
