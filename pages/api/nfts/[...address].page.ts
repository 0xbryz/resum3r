// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from 'next'
import { Network, Alchemy } from 'alchemy-sdk';

const settings = {
  apiKey: process.env.ALCHEMY_KEY,
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
    // sort by kudos first in one method
    const nfts = (await alchemy.nft.getNftsForOwner(_address)).ownedNfts.sort((a, b) => {
      if (a.contract.address === KUDOS_CONTRACT) {
        return -1;
      } else if (b.contract.address === KUDOS_CONTRACT) {
        return 1;
      } else {
        return 0;
      }
    });

    console.log(`Found ${nfts.length} nfts for ${_address}`);
    res.send(nfts);
  } catch (error) {
    console.log(error);
    res.send([]);
  }
}
