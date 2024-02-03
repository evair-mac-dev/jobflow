import { HashRouter, Route, Routes } from 'react-router-dom';
import { Dashboard, Setting } from '@pages';
import { NavigationTemplate } from '@templates';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<NavigationTemplate />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/settings" element={<Setting />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
