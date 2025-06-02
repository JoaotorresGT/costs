import { Link } from 'react-router-dom'
import styles from './ProjectCard.module.css'
import { BsPencil, BsFillTrashFill } from 'react-icons/bs'

function ProjectCard({ id, name, budget, category, handleRemove }) {
    const categoryColors = {
        infra: '#FFAEBC',
        desenvolvimento: '#a0e7e5',
        design: '#b4f8c8',
        planejamento: '#fbe7c6'
    }

    const remove = (e) => {
        e.preventDefault()
        handleRemove(id)
    }

    const categoryColor = categoryColors[category?.toLowerCase()] || '#ccc'

    return (
        <div className={styles.project_card}>
            <h4>{name}</h4>
            <p>
                <span>Orçamento:</span> R${budget}
            </p>
            <p className={styles.category_text}>
                <span
                    className={styles.color_dot}
                    style={{ backgroundColor: categoryColor }}
                ></span>
                {category}
            </p>
            <div className={styles.project_card_actions}>
                <Link to={`/project/${id}`}>
                    <BsPencil className={styles.icon} />
                </Link>
                <button onClick={remove}>
                    <BsFillTrashFill className={styles.icon} />
                </button>
            </div>
        </div>
    )
}

export default ProjectCard
