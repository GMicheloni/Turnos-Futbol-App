import styles from "./Section.module.css";

const Section = () => {
  return (
    <div className={styles.centered}>
      <h1>Saca tu turno</h1>
      <h2>facil y rapido</h2>
      <h4>Agenda tu partido en solo unos clics</h4>
      <button className={styles.turnoButton}>Saca tu Turno</button>
      <hr />
    </div>
  );
};

export default Section;
