import css from './App.module.css'

import user from '../../userData.json';
import Profile from '../Profile/Profile.jsx';

import friends from '../../friends.json';
import FriendList from '../FriendList/FriendList.jsx'

import transactions from '../../transactions.json'
import TransactionHistory from './TransactionHistory/TransactionHistory.jsx';

export default function App() {
    return (
        <div className={css.wrapper}>
            <Profile
                name = {user.username}
                tag = {user.tag}
                location = {user.location}
                image = {user.avatar}
                stats = {user.stats}
            />
            <FriendList friends = {friends} />
            <TransactionHistory transactions = {transactions}/>
        </div>
    )
}
