import css from './FriendList.module.css';
import friends from 'friends.json';
import FriendListItem from 'components/FriendListItem';


const FriendList = () => {
    return (<ul className={css.friendList}>
        {friends.map((friend)=><FriendListItem
        key={friend.id}
        isOnline={friend.isOnline}
        avatar={friend.avatar}
        name={friend.name}/>)}
      </ul>)
}
export default FriendList;