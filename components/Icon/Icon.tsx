import IcomoonReact from 'icomoon-react';

import iconSet from './selection.json';

type Props = {
  name: string;
  className?: string;
};

const Icon = ({ name, className = '' }: Props) => {
  return <IcomoonReact className={className} iconSet={iconSet} icon={name} />;
};

export { Icon };
