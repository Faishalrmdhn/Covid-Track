import React from "react";
import styles from "./Cards.module.css";
import { Grid } from "@material-ui/core";
import CardComponent from "./Card/Card";

const Cards = ({ data: { confirmed, recovered, deaths } }) => {
  if (!confirmed) {
    return "Loading...";
  }

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <CardComponent
          className={styles.confirmed}
          cardTitle="Kasus"
          value={confirmed.value}
          cardSubtitle="Jumlah Angka Kasus COVID-19"
        />
        <CardComponent
          className={styles.recovered}
          cardTitle="Sembuh"
          value={recovered.value}
          cardSubtitle="Jumlah Angka Sembuh COVID-19"
        />
        <CardComponent
          className={styles.deaths}
          cardTitle="meninggal"
          value={deaths.value}
          cardSubtitle="Jumlah Angka Meninggal COVID-19"
        />
      </Grid>
    </div>
  );
};

export default Cards;
