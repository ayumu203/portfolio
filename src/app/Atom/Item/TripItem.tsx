import React from 'react';

type TripItemProps = {
  text: string;
};

export default function TripItem({ text }: TripItemProps) {
  return <p className="mb-3 sm:mb-4 md:mb-5 leading-relaxed" style={{ lineHeight: "1.7" }}>{text}</p>;
}
