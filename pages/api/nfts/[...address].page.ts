// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from 'next'
import { Network, Alchemy } from 'alchemy-sdk';

const settings = {
  apiKey: process.env.ALCHEMY_API_KEY,
  network: Network.MATIC_MAINNET,
}

const alchemy = new Alchemy(settings);

const KUDOS_CONTRACT = '0x60576a64851c5b42e8c57e3e4a5cf3cf4eeb2ed6';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { address } = req.query
  const _address = Array.isArray(address) ? address[0] : address;

  console.log({ address });

  try {
    const nfts = (await alchemy.nft.getNftsForOwner(_address)).ownedNfts.filter((nft) => !nft.contract.address.match(KUDOS_CONTRACT));
    console.log(`Found ${nfts.length} nfts for ${_address}`);
    res.send(nfts);
  } catch (error) {
    console.log(error);
    res.send([]);
  }
}
