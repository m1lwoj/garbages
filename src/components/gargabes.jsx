import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import { Autocomplete } from "@material-ui/lab";
import DeleteIcon from "@material-ui/icons/DeleteOutline";
import { Containers, ContainerColors } from "../const/containerTypes";
import { ContainerDescription } from "./containerDescription";
import { garbages } from "../const/garbageList";
import "../css/style.css";
import $ from "jquery";

export class Garbages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedGarbage: 0,
      containerTypes: Containers
    };

    this.changeGarbage = this.changeGarbage.bind(this);
    this.setBackground = this.setBackground.bind(this);
  }

  changeGarbage(event, el) {
    let container = Containers.NONE;
    if (el) {
      container = el.container;
      this.setState({
        selectedGarbage: el,
        containerTypes: Containers
      });
    } else {
      this.setState({
        selectedGarbage: el,
        containerTypes: Containers
      });
    }

    this.setBackground(container);
  }

  ///TODO
  // dodać opisy do produktów
  // dodać produkty
  //dodać elektrośmieci z infformacją
  // dodać wielki gabaryt z informacją
  //http://naukawpolsce.pap.pl/aktualnosci/news%2C77039%2Cjak-segregowac-odpady-ministerstwo-srodowiska-podpowiada.html
  //https://naszesmieci.mos.gov.pl/jak-segregowac
  // https://ekosystem.wroc.pl/segregacja-odpadow/gdzie-wrzucic/?odpad=kawa
  setBackground(selectedContainer) {
    let color;
    switch (selectedContainer) {
      case this.state.containerTypes.BIO:
        color = ContainerColors.BIO;
        break;
      case this.state.containerTypes.GLASS:
        color = ContainerColors.GLASS;
        break;
      case this.state.containerTypes.MIXED:
        color = ContainerColors.MIXED;
        break;
      case this.state.containerTypes.PLASTICANDMETALS:
        color = ContainerColors.PLASTICANDMETALS;
        break;
      case this.state.containerTypes.PAPER:
        color = ContainerColors.PAPER;
        break;
      case this.state.containerTypes.ELECTRONIC:
      case this.state.containerTypes.HUGEWASTES:
      case this.state.containerTypes.SELECTIVEWASTES:
      case this.state.containerTypes.OTHER:
        color = ContainerColors.OTHER;
        break;
      default:
        color = ContainerColors.NONE;
    }

    $("body").css({
      transition: "background-color 1s ease-in-out",
      "background-color": color
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div class="search-header">
          <Autocomplete
            id="combo-box-demo"
            options={garbages.sort((a, b) => a.name.localeCompare(b.name))}
            getOptionLabel={option => option.name}
            size="medium"
            onChange={this.changeGarbage}
            renderInput={params => (
              <TextField
                {...params}
                style={{
                  fontSize: 15,
                  textOverflow: "ellipsis",
                  overflow: "hidden"
                }}
                label="Co chcesz wyrzucić?"
                variant="standard"
                fullWidth
              />
            )}
          />
        </div>
        <div class="search-footer">
          <label
            style={{
              display: "inline-block"
            }}
          >
            <DeleteIcon class="garbage-container-icon MuiSvgIcon-root" />
          </label>
        </div>
        <ContainerDescription
          garbage={this.state.selectedGarbage}
        />
      </form>
    );
  }
}
