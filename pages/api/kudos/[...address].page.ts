// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from 'next'
import { Network, Alchemy } from 'alchemy-sdk';

const settings = {
  apiKey: process.env.ALCHEMY_API_KEY,
  network: Network.MATIC_MAINNET,
}

const alchemy = new Alchemy(settings);

const KUDOS_CONTRACT = '0x60576A64851C5B42e8c57E3E4A5cF3CF4eEb2ED6';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { address } = req.query
  const _address = Array.isArray(address) ? address[0] : address;

  console.log({ address });

  try {
    const kudos = await alchemy.nft.getNftsForOwner(_address, {
      contractAddresses: [KUDOS_CONTRACT],
    });
    console.log(`Found ${kudos.totalCount} kudos for ${_address}`);
    res.send(kudos.ownedNfts);
  } catch (error) {
    console.log(error);
    res.send([]);
  }
}
