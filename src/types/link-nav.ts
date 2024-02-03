import { ReactNode } from 'react';

export interface ILinkNav {
  active: boolean;
  classNames?: string;
  icon?: ReactNode;
  name: string;
  path: string;
  onClick?: () => void;
}
