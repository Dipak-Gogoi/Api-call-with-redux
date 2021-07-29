import { useState } from 'react';
import Header from './components/Header';
import DataList from './components/DataList';
import DataDetails from './components/DataDetails';


function App() {
  const [showDataDetail, setShowDataDetail] = useState(false);
  const [data, setData] = useState({});


  const emitChildDataHandler = (value) => {
    setShowDataDetail(true);
    setData(value);
  };

  const closeModal = () => {
    setShowDataDetail(false)
  };

  return (
    <div className="App">
      <Header />
      {
        showDataDetail && <DataDetails data={data} closeModal={closeModal} />
      }
      <DataList emitChildData={emitChildDataHandler} />
    </div>
  );
}

export default App;
