import { Link } from 'react-router-dom';
import styles from './ProjectCard.module.css';
import { BsPencil, BsFillTrashFill } from 'react-icons/bs';

function ProjectCard({ id, name, budget, category, handleRemove }) {
  return (
    <div className={styles.projectCard}>
      <div className={styles.name}>
        <h4>{name}</h4>
      </div>
      <div className={styles.content}>
        <p>
          <span>Budget:</span> R$ { budget }
        </p>
        <p className={`${styles.categoryText}`}>
          <span className={`${styles[category.toLowerCase()]}`}></span> { category }
        </p>
        <p className={styles.projectCardActions}>
          <Link to="/">
            <BsPencil /> Editar
          </Link>
          <button>
            <BsFillTrashFill /> Excluir
          </button>
        </p>
      </div>
    </div>
  );
}

export default ProjectCard;
