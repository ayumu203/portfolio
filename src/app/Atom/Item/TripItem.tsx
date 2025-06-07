import React from 'react';

type TripItemProps = {
  text: string;
};

export default function TripItem({ text }: TripItemProps) {
  return <p className="mb-5">{text}</p>;
}
