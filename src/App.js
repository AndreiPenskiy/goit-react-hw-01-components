import Profile from "./components/Profile/Profile";
import Statistics from "./components/Stats/Statistics";
import FriendList from "./components/Friends/FriendsList";
import TransactionHistory from "./components/Transactions/Transactions";

import user from "./user.json";
import data from "./data.json";
import friends from "./friends.json";
import transactions from "./transactions.json";

export default function App() {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}
