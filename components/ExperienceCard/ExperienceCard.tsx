import React from 'react';
import BaseCard from '../BaseCard/BaseCard';
import PositionTile from './PositionTile';
import { PositionTileProps } from './PositionTile';

type ExperienceCardProps = React.HTMLAttributes<HTMLElement> & {
  data: PositionTileProps[];
};

export default function ExperienceCard({
  data,
  ...props
}: ExperienceCardProps): JSX.Element {
  return (
    <BaseCard label="Experience" divider {...props}>
      {data.map((el, i) => (
        <PositionTile key={i} {...el} />
      ))}
    </BaseCard>
  );
}
