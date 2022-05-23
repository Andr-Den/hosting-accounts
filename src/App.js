import Header from './components/Header/Header';
import Main from './components/Main/Main';


const domainsList = [
  {
    title: 'shoky-yoku.ru',
    description: 'shoky-yoku.ru (alias)'
  },
  {
    title: 'srv164042.hoster-test.ru',
    description: 'srv164042.hoster-test.ru (alias)'
  },
  {
    title: 'сёкуёкую.рф',
    description: 'www.сёкуёкую.рф'
  },
]

function App() {
  return (
    <div className="App">
      <Header />
      <Main list={domainsList}/>
    </div>
  );
}

export default App;