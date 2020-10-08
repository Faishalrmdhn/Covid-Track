import React from "react";
import axios from "axios";
import imageHeader from "../../img/header.png";
import styles from "./Home.module.css";
import Typography from "@material-ui/core/Typography";
import PickCountry from "../../components/PickCountry/PickCountry";
import Cards from "../../components/Cards/Cards";

class Home extends React.Component {
  state = {
    name: "",
    data: {},
  };

  componentDidMount() {
    this.getData();
    console.log("Did Mount is running");
  }

  handleChange = (event) => {
    console.log(event.target.value);
    this.setState({
      name: event.target.value,
    });
  };

  getData = (country) => {
    let setUrl = "https://covid19.mathdro.id/api";
    setUrl = country ? `${setUrl}/countries/${country}` : setUrl;
    axios
      .get(setUrl)
      .then((res) => {
        // console.log(res);
        this.setState({
          data: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleCountryChange = (event) => {
    let country = event.target.value;
    this.getData(country);
    const setCountry = country ? country : "Global";
    console.log(event.target.value);
    this.props.history.push({
      search: "?country=" + setCountry,
    });
  };

  render() {
    const { data } = this.state;
    const lastUpdate = new Date(data.lastUpdate).toDateString();
    console.log(lastUpdate);
    return (
      <div className={styles.container}>
        <img className={styles.image} src={imageHeader} alt="header-covid" />
        <Typography variant="subtitle2" color="textSecondary" gutterBottom>
          Last Updated : {lastUpdate}
        </Typography>
        <PickCountry handleCountryChange={this.handleCountryChange} />
        <Cards data={data} />
      </div>
    );
  }
}

export default Home;
