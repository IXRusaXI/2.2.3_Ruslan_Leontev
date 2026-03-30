import './Circle.css';
import classNames from 'classnames';

interface Props {
  color: string;
  active?: boolean;
}

export function Circle({ color, active }: Props) {
  return <div className="circle circle-green" />;
}
