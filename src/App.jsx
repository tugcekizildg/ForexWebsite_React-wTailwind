import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <div className='bg-black text-zinc-100 p-4'>
      <NavBar />
      <div className=''>
        <HomePage />
      </div>
    </div>
  );
};

export default App;
