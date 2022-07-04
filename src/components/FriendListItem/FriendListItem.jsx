import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

const FriendListItem =(friends)=>{
    const {avatar, name, isOnline} = friends;
    return(
    <li className={css.item}>
    <span className={isOnline ? css.statusGreen : css.statusRed} ></span>
    <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
    <p className={css.name}>{name}</p>
    </li>
    )
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,

}
export default FriendListItem;