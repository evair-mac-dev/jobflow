import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { cx } from '@utils';
import { ILinkNav } from '@types';
import { Divider, LinkNav } from '@atoms';

const InitialLinks: ILinkNav[] = [
  {
    name: 'Dashboard',
    path: '/dashboard',
    active: true,
    icon: '🏠',
  },
  {
    name: 'Settings',
    path: '/settings',
    active: false,
    icon: '⚙️',
  },
];

export const MenuNav = () => {
  const location = useLocation();
  const [active, setActive] = useState('Dashboard');

  useEffect(() => {
    const path = location.pathname;
    const link = InitialLinks.find((link) => link.path === path);
    if (link) {
      setActive(link.name);
    }
  }, [location]);

  return (
    <div
      className={cx(
        'flex flex-col items-center',
        'w-72 bg-sand-soft-alt',
        'border-r border-sand-soft',
      )}
    >
      <div className={cx('px-4 pb-12 pt-16')}>
        <div className={cx('bg-flow-text bg-clip-text text-4xl w-fit')}>JobFlow</div>
      </div>
      <Divider classNames={cx('my-4')} />
      <div className={cx('flex flex-col gap-2', 'w-full')}>
        {InitialLinks.map((link, index) => (
          <LinkNav
            key={index}
            active={link.name === active}
            name={link.name}
            path={link.path}
            onClick={() => setActive(link.name)}
            icon={link.icon}
          />
        ))}
      </div>
    </div>
  );
};
