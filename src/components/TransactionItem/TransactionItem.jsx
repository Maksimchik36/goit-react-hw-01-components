import PropTypes from 'prop-types';
import css from './TransactionItem.module.css'


const TransactionItem =(props)=>{
    const {type, amount, currency} = props;
    return (<tr className={css.item}>
        <td className={css.type}>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>)
}

TransactionItem.propTypes ={
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
}

export default TransactionItem;