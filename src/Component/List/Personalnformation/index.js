import React, { Component } from "react";

import { Table } from "react-bootstrap";
import Title from "../Title/index";

import edit from "../../../images/pen.png";


import "./style.css";

export class PersonalInformation extends Component {
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
 

    return (
      <div className="personel">
        <Title heading="Personal Information" />
        <Table striped bordered hover className="table__setting">
          <img
            alt="edit"
            src={edit}
            className="table__edit_bt"
            onClick={this.disabledHandle}
          />
          <tbody className="table__body">
            <tr>
              <td className="">Status</td>
              <td>
                <button
                  disabled={this.state.disabled ? "disabled" : ""}
                  className="table__btn__status"
                >
                  {this.props.data[0].status}
                </button>
              </td>
            </tr>
            <tr>
              <td>Ansteildatum</td>
              <td>
                <input
                  className="table__input"
                  type="text"
                  placeholder="Ansteildatum"
                  defaultValue={this.props.data[0].anstellidum}
                  disabled={this.state.disabled ? "disabled" : ""}
                />
              </td>
            </tr>
            <tr>
              <td>Vertragsende</td>
              <td>
                <input
                  className="table__input table__email"
                  type="text"
                  placeholder="Vertragsende"
                  defaultValue={this.props.data[0].vertragsendse}
                  disabled={this.state.disabled ? "disabled" : ""}
                />
              </td>
            </tr>
            <tr>
              <td>Kostenstile</td>
              <td>
                <input
                  className="table__input"
                  type="text"
                  placeholder="Kostenstile"
                  defaultValue={this.props.data[0].kostenstile[0]}
                  disabled={this.state.disabled ? "disabled" : ""}
                />
                <input
                  className="table__input"
                  type="text"
                  placeholder="Kostenstile"
                  defaultValue={this.props.data[0].kostenstile[1]}
                  disabled={this.state.disabled ? "disabled" : ""}
                />
              </td>
            </tr>
            <tr>
              <td>Vorgestzter</td>
              <td>
                <input
                  className="table__input"
                  type="text"
                  placeholder="Vorgestzter"
                  defaultValue={this.props.data[0].vorgesetzter}
                  disabled={this.state.disabled ? "disabled" : ""}
                />
              </td>
            </tr>
            <tr>
              <td>Dauer Probezeit</td>
              <td>
                <input
                  className="table__input"
                  type="text"
                  placeholder="Dauer Probezeit"
                  defaultValue={this.props.data[0].dauer}
                  disabled={this.state.disabled ? "disabled" : ""}
                />
              </td>
            </tr>
            <tr>
              <td>Wochenstunden</td>
              <td>
                <input
                  className="table__input"
                  type="text"
                  placeholder="Wochenstunden"
                  defaultValue={this.props.data[0].wochenstunden}
                  disabled={this.state.disabled ? "disabled" : ""}
                />
              </td>
            </tr>
            <tr>
              <td>Kinder</td>
              <td>
                <input
                  className="table__input"
                  type="text"
                  placeholder="Kinder"
                  defaultValue={this.props.data[0].kinder}
                  disabled={this.state.disabled ? "disabled" : ""}
                />
              </td>
            </tr>
            <tr>
              <td>PersonalNummber</td>
              <td>
                <input
                  className="table__input"
                  type="text"
                  placeholder="PersonalNummber"
                  defaultValue={this.props.data[0].personalnummer}
                  disabled={this.state.disabled ? "disabled" : ""}
                />
              </td>
            </tr>
            <tr>
              <td>Geburtsort</td>
              <td>
                <input
                  className="table__input"
                  type="text"
                  placeholder="Geburtsort"
                  defaultValue={this.props.data[0].geburtsort}
                  disabled={this.state.disabled ? "disabled" : ""}
                />
              </td>
            </tr>
            <tr>
              <td>Nationalist</td>
              <td>
                <input
                  className="table__input"
                  type="text"
                  defaultValue={this.props.data[0].nationalist}
                  placeholder="Nationalist"
                  disabled={this.state.disabled ? "disabled" : ""}
                />
              </td>
            </tr>
            <tr>
              <td>Studienbescheingung gultg bis</td>
              <td>
                <input
                  className="table__input"
                  type="text"
                  placeholder="Studienbescheingung"
                  defaultValue={this.props.data[0].studein}
                  disabled={this.state.disabled ? "disabled" : ""}
                />
              </td>
            </tr>
            <tr>
              <td>Kundigungsfirst</td>
              <td>
                <input
                  className="table__input"
                  type="text"
                  defaultValue={this.props.data[0].kundi}
                  disabled={this.state.disabled ? "disabled" : ""}
                />
              </td>
            </tr>

            <tr>
              <td>Beschaftgungast</td>
              <td>
                <input
                  className="table__input"
                  type="text"
                  placeholder="Beschaftgungast"
                  defaultValue={this.props.data[0].besch}
                  disabled={this.state.disabled ? "disabled" : ""}
                />
              </td>
            </tr>

            <tr>
              <td>T-Shirt Globe</td>
              <td>
                <input
                  className="table__input"
                  type="text"
                  placeholder="T-shirt Globe"
                  defaultValue={this.props.data[0].tshirstgrob}
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

export default PersonalInformation;
