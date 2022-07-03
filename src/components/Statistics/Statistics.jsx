import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = (props) => {
    const { title, stats } = props;
    return (<section className={css.statistics}>
  <div className={css.title}>{title && <h2 >{title}</h2>}</div>

  <ul className={css.statList}>
    {stats.map((stats)=> {return (<li className={css.item} key={stats.id}>
      <span className={css.label}>{stats.label}</span>
      <span className={css.percentage}>{stats.percentage}%</span>
    </li>)})}  
  </ul>
</section>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,   
    }))
    
}
export default Statistics;