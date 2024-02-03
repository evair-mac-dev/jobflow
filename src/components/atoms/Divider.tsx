import { FC } from 'react';
import { cx } from '@utils';
import { IDivider } from '@types';

export const Divider: FC<IDivider> = (props) => {
  const { classNames } = props;
  return (
    <div className={cx('h-0.5 w-4/5 bg-ocean-linear', ...(classNames ? [classNames] : []))}></div>
  );
};
