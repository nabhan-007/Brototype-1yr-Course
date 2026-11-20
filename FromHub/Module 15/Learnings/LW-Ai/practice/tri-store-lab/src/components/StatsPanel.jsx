// MOBX on the read side: observer() subscribes this component to every observable
// it reads (total, done, percent, message). Without observer(), the numbers freeze.
import { observer } from 'mobx-react-lite';
import { statsStore } from '../store/statsStore';

export default observer(function StatsPanel() {
  return (
    <div className="stats">
      <p>
        <strong>{statsStore.done}</strong> of <strong>{statsStore.total}</strong> tasks done
      </p>
      <div className="bar">
        <div className="fill" style={{ width: `${statsStore.percent}%` }} />
      </div>
      <p>{statsStore.percent}% complete</p>
      {statsStore.message && <p className="msg">{statsStore.message}</p>}
    </div>
  );
});
