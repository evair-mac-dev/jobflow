import { Outlet } from 'react-router-dom';
import { cx } from '@utils';
import { MenuNav } from '@organisms';

export const NavigationTemplate = () => {
  return (
    <div className={cx('w-full h-screen bg-ocean-radial-soft')}>
      <div className={cx('flex h-full w-full')}>
        <MenuNav />
        <div className={cx('flex-grow')}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
