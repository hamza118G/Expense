import './App.css';
import AddTransaction from './component/AddTransaction';
import Balance from './component/Balance';
import Header from './component/Header';
import { IncomeExpence } from './component/IncomeExpence';
import TranscationList from './component/TranscationList';

import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Header/>
      <div className="container">
      <Balance/>
      <IncomeExpence/>
      <TranscationList/>
      <AddTransaction/>
      </div>
    </GlobalProvider>
  );
}

export default App;
