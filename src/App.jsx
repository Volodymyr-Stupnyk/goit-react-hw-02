import FriendList from "./components/FriendList/FriendList";
import Profile from "./components/Profile/Profile";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import userData from "./assets/userData.json";
import transactions from './assets/transactions.json';
import friends from './assets/friends.json';


const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends}/>
      <TransactionHistory items={transactions}/>
    </>);
};

export default App;

  [
  {
    "avatar": "https://cdn-icons-png.flaticon.com/512/1998/1998592.png",
    "name": "Mango",
    "isOnline": true,
    "id": 1812
  },
  {
    "avatar": "https://cdn-icons-png.flaticon.com/512/616/616438.png",
    "name": "Kiwi",
    "isOnline": false,
    "id": 1137
  },
  {
    "avatar": "https://cdn-icons-png.flaticon.com/512/1623/1623681.png",
    "name": "Ajax",
    "isOnline": true,
    "id": 1213
  },
  {
    "avatar": "https://cdn-icons-png.flaticon.com/512/2977/2977285.png",
    "name": "Jay",
    "isOnline": true,
    "id": 1714
  },
  {
    "avatar": "https://cdn-icons-png.flaticon.com/512/1998/1998749.png",
    "name": "Poly",
    "isOnline": false,
    "id": 1284
  }
]