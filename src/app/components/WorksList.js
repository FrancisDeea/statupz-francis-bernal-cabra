import data from '../../../public/data.json';
import Card from './Card';
import styles from './WorksList.module.scss';

const WorksList = () => {
    const works = data.works;

    return (
        <div className={styles.container}>
            {
                works.map(item => {
                    return <Card key={item.title} card={item} />
                })
            }
        </div>
    )
}

export default WorksList