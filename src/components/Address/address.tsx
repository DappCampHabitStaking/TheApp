import React from 'react'

type Props = {
  address: string | undefined;
};

const Address = ({ address }: Props) => {
  const shortAddress =
    address &&
    address.length > 0 &&
    address.slice(0, 5) +
      "..." +
      address.slice(address.length - 4, address.length);
  return <p>{shortAddress}</p>;
};

export default Address;
