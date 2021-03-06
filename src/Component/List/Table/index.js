import React, { Component } from "react";

import Title from "../Title/index";

import edit from "../../../images/pen.png";

import { Table } from "react-bootstrap";

import {officialMockData} from '../../../tableMockData';

import "./style.css";

class TableData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: true,
    };
  }

  disabledHandle = () => {
    this.setState({
      disabled: !this.state.disabled,
    });
  };
  render() {
    const data = officialMockData.map(table => {
      return table
    })

    console.log(data[0].name)
    return (
      <div>
        <Title heading="Öffentliches Profil"/>
        <Table striped bordered hover className="table__setting">
          <img
            alt="edit"
            src={edit}
            className="table__edit_bt"
            onClick={this.disabledHandle}
          />
          <tbody className="table__body">
            <tr>
              <td className="">Name</td>
              <td>
                <input
                  className="table__input"
                  type="text"
                  placeholder="Salman"
                  value={data[0].name}
                  disabled={this.state.disabled ? "disabled" : ""}
                  name="name"
                />
              </td>
            </tr>
            <tr>
              <td>Gestchiest</td>
              <td>
                <input
                  className="table__input"
                  type="text"
                  placeholder="Salman"
                  value={data[0].gestchiest}
                  disabled={this.state.disabled ? "disabled" : ""}
                />
              </td>
            </tr>
            <tr>
              <td>Email</td>
              <td>
                <input
                  className="table__input"
                  type="text"
                  value={data[0].email}
                  placeholder="salmansaleem036@gmail.com"
                  disabled={this.state.disabled ? "disabled" : ""}
                />
              </td>
            </tr>
            <tr>
              <td>Standord</td>
              <td>
                <input
                  className="table__input"
                  type="text"
                  placeholder="Salman"
                  value={data[0].standort}
                  disabled={this.state.disabled ? "disabled" : ""}
                />
              </td>
            </tr>
            <tr>
              <td>Abtilung Position</td>
              <td>
                <input
                  className="table__input"
                  type="text"
                  placeholder="Salman"
                  value={data[0].gestchiest}
                  disabled={this.state.disabled ? "disabled" : ""}
                />
              </td>
            </tr>
            <tr>
              <td>Handymummer</td>
              <td>
                <input
                  className="table__input"
                  type="text"
                  value={data[0].handymummer}
                  placeholder="Salman"
                  disabled={this.state.disabled ? "disabled" : ""}
                />
              </td>
            </tr>
            <tr>
              <td>Durchwahi</td>
              <td>
                <input
                  className="table__input"
                  type="text"
                  value={data[0].durchwahi}
                  placeholder="Salman"
                  disabled={this.state.disabled ? "disabled" : ""}
                />
              </td>
            </tr>
            <tr>
              <td>XING</td>
              <td>
                <input
                  className="table__input"
                  type="text"
                  placeholder="Salman"
                  value={data[0].xing}
                  disabled={this.state.disabled ? "disabled" : ""}
                />
              </td>
            </tr>
            <tr>
              <td>LinkedIn</td>
              <td>
                <input
                  className="table__input"
                  type="text"
                  placeholder="Salman"
                  value={data[0].linkedin}
                  disabled={this.state.disabled ? "disabled" : ""}
                />
              </td>
            </tr>
            <tr>
              <td>Skype Name</td>
              <td>
                <input
                  className="table__input"
                  type="text"
                  placeholder="Salman"
                  value={data[0].skypename}
                  disabled={this.state.disabled ? "disabled" : ""}
                />
              </td>
            </tr>
            <tr>
              <td>Lieblings</td>
              <td>
                <input
                  className="table__input"
                  type="text"
                  value={data[0].lieblings}
                  disabled={this.state.disabled ? "disabled" : ""}
                />
              </td>
            </tr>
            <tr>
              <td>Hobbies</td>
              <td>
                <input
                  className="table__input"
                  type="text"
                  value={data[0].hobbies}
                  disabled={this.state.disabled ? "disabled" : ""}
                />
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default TableData;
