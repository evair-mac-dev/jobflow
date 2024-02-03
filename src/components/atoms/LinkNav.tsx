import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ILinkNav } from '@types';
import { cx } from '@utils';

export const LinkNav: FC<ILinkNav> = (props) => {
  const { active, classNames, icon, name, path } = props;
  return (
    <Link to={path}>
      <div
        className={cx(
          'flex flex-row',
          'w-full p-4',
          'border',
          'border-transparent',
          'hover:border-blue-skyblue-soft',
          active ? 'bg-ocean-linear-soft border-x-0' : '',
          ...(classNames ? [...classNames] : []),
        )}
        onClick={() => props.onClick && props.onClick()}
      >
        <div className={cx('mx-auto flex gap-1 min-w-36')}>
          {icon ? <span>{icon}</span> : null}
          <span>{name}</span>
        </div>
      </div>
    </Link>
  );
};
