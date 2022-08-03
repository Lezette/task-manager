import './styles/app.scss';
import Homepage from './pages';
import { Sidebar } from './components/organism'

function App() {
  return (
    <main className="flex">
      <Sidebar />
      <section className="flex-1">
        <Homepage />
      </section>
    </main>
  );
}

export default App;
