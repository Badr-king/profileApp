import './App.css';
import ProfilePhoto from './Component/Profile/ProfilePhoto';
import Fullname from './Component/Profile/Fullname';
import Address from './Component/Profile/Address';
function App() {
  return (
    <div className="App">
      < Fullname/>
      <ProfilePhoto />
      <Address />
    </div>
  );
}

export default App;
