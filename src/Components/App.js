import Profile from "./Profile/Profile";
import user from "../data/user.json";
import statisticalData from "../data/statistical-data.json";
import Statistics from "./Statistics/Statistics";
import FriendList from "./FriendList/FriendList";
import friends from "../data/friends.json";
import transactions from "../data/transactions.json";
import TransactionHistory from "./transactionHistory/TransactionHistory";
// import Parallax from "parallax-js";

const App = () => {
  // useEffect(() => {
  //   const scene = document.getElementById("scene");
  //   const parallaxInstance = new Parallax(scene);
  //   parallaxInstance.friction(0.2, 0.2);
  // }, []);
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />
      <FriendList friends={friends} />,
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
