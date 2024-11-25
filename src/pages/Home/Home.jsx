import styles from './Home.module.css';
import savings from '../../img/savings.svg';
import LinkButton from '../../components/form/LinkButton';

function Home() {
    return (
        <section className={styles.homeContainer}>
          <h1>Bem-vindo ao <span>Costs</span></h1>
          <p>Comece a gerenciar os seus projetos agora mesmo!</p>
          <LinkButton to="/project/new" text="Criar Projeto" />
          <img src={savings} alt="Costs Image" aria-hidden="true" />
        </section>
    );
}

export default Home;
