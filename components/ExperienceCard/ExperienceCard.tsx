import React from 'react';
import BaseCard from '../BaseCard/BaseCard';
import PositionTile from './PositionTile';
import { PositionTileProps } from './PositionTile';

type ExperienceCardProps = React.HTMLAttributes<HTMLElement> & {
  data: PositionTileProps[];
};

export default function ExperienceCard({
  data,
  className,
}: ExperienceCardProps): JSX.Element {
  return (
    <BaseCard className={className} label="Experience" divider>
      {data.map((el, i) => (
        <PositionTile key={i} {...el} />
      ))}
    </BaseCard>
  );
}
