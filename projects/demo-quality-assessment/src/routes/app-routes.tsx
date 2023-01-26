import { PageLayout } from '@3divi/shared/src/components';
import {
  Route,
  Routes,
  BrowserRouter as Router,
  Navigate,
} from 'react-router-dom';
import { QualityPage } from '../pages';
import { Pathnames } from './pathnames.const';

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route element={<PageLayout />}>
          <Route path={Pathnames.quality} element={<QualityPage />} />
        </Route>
        <Route path="*" element={<Navigate to={Pathnames.quality} />} />
      </Routes>
    </Router>
  );
}
