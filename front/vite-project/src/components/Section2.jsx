import styles from "./Section2.module.css";

const Section2 = () => {
  return (
    <div className={styles.centered}>
      <h3>Como funciona</h3>
      <ol className={styles.lista}>
        <h2>1</h2>
        <h2>2</h2>
        <h2>3</h2>
      </ol>
      <ol className={styles.lista}>
        <li>Registrate</li>
        <li>Elegi tu Turno</li>
        <li>Confirma y listo</li>
      </ol>
    </div>
  );
};

export default Section2;
