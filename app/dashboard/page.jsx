import Card from "../../componet/dashboard/card/card";
import Chart from "../../componet/dashboard/chart/chart";
import styles from "../../componet/dashboard/dashboard.module.css";
import Rightbar from "../../componet/dashboard/rightbar/rightbar";
import Transaction from "../../componet/dashboard/transaction/transaction";
const Dashboard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        {/* cards */}
        <div className={styles.cards}>
          <Card />
          <Card />
          <Card />
        </div>
        {/* transaction */}
        <Transaction />
        {/* chart */}
        <Chart />
      </div>

      <div className={styles.side}>
        <Rightbar />
      </div>
    </div>
  );
};

export default Dashboard;
