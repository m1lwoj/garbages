import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { Autocomplete } from '@material-ui/lab';
import DeleteIcon from '@material-ui/icons/DeleteOutline';
import { Containers, ContainerColors } from '../const/containerTypes'
import { ContainerDescription } from './containerDescription'
import '../css/style.css';
import $ from 'jquery'

export class NameForm extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedContainer: 0, containerTypes: Containers };

    this.handleChange = this.handleChange.bind(this);
    this.setBackground = this.setBackground.bind(this);
  }

  handleChange(event, el) {
    let container = Containers.NONE;
    if (el && el.container) {
      container = el.container;
      this.setState({ selectedContainer: container, containerTypes: Containers });
    }
    else {
      this.setState({ selectedContainer: container, containerTypes: Containers })
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
  setBackground(selectedContainer) {
    let color;
    switch (selectedContainer) {
      case this.state.containerTypes.BIO:
        color = ContainerColors.BIO
        break;
      case this.state.containerTypes.GLASS:
        color = ContainerColors.GLASS
        break;
      case this.state.containerTypes.MIXED:
        color = ContainerColors.MIXED
        break;
      case this.state.containerTypes.PLASTICANDMETALS:
        color = ContainerColors.PLASTICANDMETALS
        break;
      case this.state.containerTypes.PAPER:
        color = ContainerColors.PAPER
        break;
      case this.state.containerTypes.OTHER:
        color = ContainerColors.OTHER
        break;
      default:
        color = ContainerColors.NONE
    }

    $(".App-header").css({
      transition: 'background-color 1s ease-in-out',
      "background-color": color
    });
  }


  render() {
    let container;
    switch (this.state.selectedContainer) {
      case this.state.containerTypes.BIO:
        container = <DeleteIcon class="garbage-container-icon bio-container-icon MuiSvgIcon-root" />
        break;
      case this.state.containerTypes.GLASS:
        container = <DeleteIcon class="garbage-container-icon glass-container-icon MuiSvgIcon-root" />
        break;
      case this.state.containerTypes.MIXED:
        container = <DeleteIcon class="garbage-container-icon mixed-container-icon MuiSvgIcon-root" />
        break;
      case this.state.containerTypes.PLASTICANDMETALS:
        container = <DeleteIcon class="garbage-container-icon plasticandmetals-container-icon MuiSvgIcon-root" />
        break;
      case this.state.containerTypes.PAPER:
        container = <DeleteIcon class="garbage-container-icon paper-container-icon MuiSvgIcon-root" />
        break;
      case this.state.containerTypes.OTHER:
        container = <label>inne</label>;
        break;
      default:
        container = <label></label>;
    }

    return (
      <form onSubmit={this.handleSubmit}>
        <div >
          <Autocomplete
            id="combo-box-demo"
            options={garbages}
            getOptionLabel={option => option.name}
            style={{ width: 500, height: '100px', width: '800px', borderWidth: '20px', fontSize: '40px' }}
            onChange={this.handleChange}
            renderInput={params => (
              <TextField {...params} label="Co chcesz wyrzucić?" variant="standard" fullWidth />
            )}
          />
        </div>
        <div style={{ margin: "50px", marginTop: "100px" }}>
          <label style={{ display: 'inline-block' }}>
            <DeleteIcon class="garbage-container-icon MuiSvgIcon-root" />
          </label>
        </div>
        <ContainerDescription
          container={this.state.selectedContainer}
        />
      </form>
    );
  }
}

const garbages = [
  { name: 'puszka', container: Containers.PLASTICANDMETALS },
  { name: 'folia aluminiowa', container: Containers.PLASTICANDMETALS },
  { name: 'kapsel', container: Containers.PLASTICANDMETALS },
  { name: 'AGD', container: Containers.OTHER },
  { name: 'Baterie', container: Containers.OTHER },
  { name: 'Elektronika', container: Containers.OTHER },
  { name: 'Telefon', container: Containers.OTHER },
  { name: 'Materiały budowlane', container: Containers.OTHER },
  { name: 'Materac', container: Containers.OTHER },
  { name: 'Łożko', container: Containers.OTHER },
  { name: 'Szafa', container: Containers.OTHER },
  { name: 'Biurko', container: Containers.OTHER },
  { name: 'Biurko', container: Containers.OTHER },
  { name: 'Plastikowe zabawki', container: Containers.MIXED },
  { name: 'Opakowanie po jajkach', container: Containers.PAPER },
  { name: 'Czasopismo', container: Containers.PAPER },
  { name: 'Ulotka', container: Containers.PAPER },
  { name: 'Papier', container: Containers.PAPER },
  { name: 'Karton', container: Containers.PAPER },
  { name: 'Tektura', container: Containers.PAPER },
  { name: 'Pudełko po pizzy', container: Containers.PAPER },
  { name: 'Rurka po papierze toaletowym', container: Containers.PAPER },
  { name: 'Rurka po ręczniku kuchennym', container: Containers.PAPER },
  { name: 'NIeotłuszczona torba papierowa', container: Containers.PAPER },
  { name: 'Otłuszczona torba papierowa', container: Containers.MIXED },
  { name: 'Zeszyt', container: Containers.PAPER },
  { name: 'Brudny papier', container: Containers.MIXED },
  { name: 'Zużyte chusteczki', container: Containers.MIXED },
  { name: 'Zużyty ręcznik papierowy', container: Containers.MIXED },
  { name: 'Worek po nawozie', container: Containers.MIXED },
  { name: 'Worek po materiałach budowlanych', container: Containers.MIXED },
  { name: 'Paragon', container: Containers.MIXED },
  { name: 'Okładka książki', container: Containers.MIXED },
  { name: 'Książka (bez okładki)', container: Containers.PAPER },
  { name: 'worek foliowy', container: Containers.PLASTICANDMETALS },
  { name: 'Zatłuszczony worek foliowy', container: Containers.MIXED },
  { name: 'reklamowka', container: Containers.PLASTICANDMETALS },
  { name: 'Kartonowe opakowanie', container: Containers.PAPER, additionalInfo: 'Jeśli to możliwe, z kartonowych paczek usuwamy taśmę klejącą i wyrzucamy ją do odpadów zmieszanych' },
  { name: 'Folia', container: Containers.PLASTICANDMETALS },
  { name: 'Zatłuszczona folia', container: Containers.MIXED },
  { name: 'Pusty słoik bez pokrywki', container: Containers.GLASS },
  { name: 'Pusta plastikowa butelka', container: Containers.PLASTICANDMETALS, additionalInfo: 'Pamiętaj aby ją zgnieść przed wyrzuceniem' },
  { name: 'Nakrętka', container: Containers.PLASTICANDMETALS, additionalInfo: 'Powinna być oddzielona od butelki' },
  { name: 'Karton po mleku', container: Containers.PLASTICANDMETALS, additionalInfo: 'Pamiętaj aby zgnieść karton przed wyrzuceniem, opakowanie powinno być puste' },
  { name: 'Karton po soku', container: Containers.PLASTICANDMETALS, additionalInfo: 'Pamiętaj aby zgnieść karton przed wyrzuceniem, opakowanie powinno być puste' },
  { name: 'Butelka po szamponie', container: Containers.PLASTICANDMETALS, additionalInfo: 'Pamiętaj aby zgnieść butlekę przed wyrzuceniem, opakowanie powinno być puste' },
  { name: 'Butelka po środkach czystości', container: Containers.PLASTICANDMETALS, additionalInfo: 'Pamiętaj aby zgnieść butlekę przed wyrzuceniem, opakowanie powinno być puste' },
  { name: 'Tubka po paście do zębów', container: Containers.PLASTICANDMETALS, additionalInfo: 'Pamiętaj aby zgnieść tubkę przed wyrzuceniem, opakowanie powinno być puste' },
  { name: 'Puszka', container: Containers.PLASTICANDMETALS, additionalInfo: 'Pamiętaj aby zgnieść puszkę przed wyrzuceniem, opakowanie powinno być puste' },
  { name: 'Zakrętki od słoików', container: Containers.PLASTICANDMETALS, additionalInfo: '' },
  { name: 'Nakrętki od słoików', container: Containers.PLASTICANDMETALS, additionalInfo: '' },
  { name: 'Folia aluminiowa', container: Containers.PLASTICANDMETALS, additionalInfo: '' },
  { name: 'Zatłuszczony folia aluminiowa', container: Containers.MIXED },
  { name: 'Folia opakowaniowa', container: Containers.PLASTICANDMETALS, additionalInfo: '' },
  { name: 'Foliowa saszetka po jedzeniu', container: Containers.PLASTICANDMETALS, additionalInfo: 'Opakowanie powinno być puste' },
  { name: 'Foliowa saszetka po kosmetykach', container: Containers.PLASTICANDMETALS, additionalInfo: 'Opakowanie powinno być puste' },
  { name: 'Garnek', container: Containers.PLASTICANDMETALS, additionalInfo: '' },
  { name: 'Patelnia', container: Containers.PLASTICANDMETALS, additionalInfo: '' },
  { name: 'Koperta z folią bombelkową', container: Containers.PLASTICANDMETALS, additionalInfo: 'Oddzielić papier i wrzucić go do pojemnika na papier' },
  { name: 'Kapsułki po kawie', container: Containers.PLASTICANDMETALS, additionalInfo: '' },
  { name: 'Opakowanie po jogurcie', container: Containers.PLASTICANDMETALS, additionalInfo: 'Pamiętaj aby zgnieść opakowanie przed wyrzuceniem, opakowanie powinno być puste' },
  { name: 'Styropian', container: Containers.PLASTICANDMETALS, additionalInfo: '' },
  { name: 'Woreczek foliowy', container: Containers.PLASTICANDMETALS, additionalInfo: '' },
  { name: 'Warzywa', container: Containers.BIO },
  { name: 'Owoce', container: Containers.BIO },
  { name: 'Mięso', container: Containers.MIXED },
  { name: 'Opakowanie po ', container: Containers.MIXED },
  { name: 'Baterie', container: Containers.OTHER },
  { name: 'Baterie', container: Containers.OTHER },
  { name: 'Butla gazowa', container: Containers.OTHER },
  { name: 'Opakowanie po aerozolu', container: Containers.OTHER },
  { name: 'Opakowanie po farbie', container: Containers.OTHER },
  { name: 'Płyty CD / DVD', container: Containers.OTHER },
  { name: 'AGD', container: Containers.OTHER },
  { name: 'RTV', container: Containers.OTHER },
  { name: 'Telewizor', container: Containers.OTHER },
  { name: 'Lodówka', container: Containers.OTHER },
  { name: 'Pralka', container: Containers.OTHER },
  { name: 'Plastikowa butelka', container: Containers.PLASTICANDMETALS },
  { name: 'Części roślin', container: Containers.BIO },
  { name: 'Fusy z kawy', container: Containers.BIO },
  { name: 'Fusy z herbaty', container: Containers.BIO },
  { name: 'Owoce', container: Containers.BIO },
  { name: 'Jajka', container: Containers.BIO },
  { name: 'Siano', container: Containers.BIO },
  { name: 'Trociny', container: Containers.BIO },
  { name: 'Warzywa', container: Containers.BIO },
  { name: 'Zepsute jedzenie (bez mięsa lub tłuszczu)', container: Containers.BIO },
  { name: 'Zepsute jedzenie zawierające mięso', container: Containers.MIXED },
  { name: 'Ziemia', container: Containers.MIXED },
  { name: 'Kamienie', container: Containers.MIXED },
  { name: 'Popiół', container: Containers.MIXED },
  { name: 'Drewno', container: Containers.MIXED },
  { name: 'Drewno', container: Containers.MIXED },
  { name: 'Kości', container: Containers.MIXED },
  { name: 'Mięso', container: Containers.MIXED },
  { name: 'Odchody zwierząt', container: Containers.MIXED },
  { name: 'Olej jadalny', container: Containers.MIXED },
  { name: 'Kurz', container: Containers.MIXED },
  { name: 'Szklana butelka po napoju', container: Containers.GLASS, additionalInfo: 'Opakowanie powinno być puste' },
  { name: 'Szklane opakowanie po ksometykach', container: Containers.GLASS, additionalInfo: 'Opakowanie powinno być puste' },
  { name: 'Ceramika', container: Containers.OTHER },
  { name: 'Doniczka', container: Containers.OTHER },
  { name: 'Porcelana', container: Containers.OTHER },
]