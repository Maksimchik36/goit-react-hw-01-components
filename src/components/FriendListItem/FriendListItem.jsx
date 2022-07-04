import css from './FriendListItem.module.css';

const FriendListItem =(friends)=>{
    const {id, avatar, name, isOnline} = friends;
    return(
    <li className={css.item} key={id}>
    <span className={isOnline ? css.statusGreen : css.statusRed} ></span>
    <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
    <p className={css.name}>{name}</p>
    </li>
    )
}
export default FriendListItem;