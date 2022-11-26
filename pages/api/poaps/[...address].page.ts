// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from 'next'

const baseURL = 'https://api.poap.tech/actions';

const Headers = {
  'accept': 'application/json',
  "X-API-KEY": process.env.POAP_API_KEY,
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { address } = req.query

  const url = `${baseURL}/scan/${address}`;
  try {
    const response = await (await fetch(url, { headers: Headers })).json();
    console.log(response?.length);
    res.send(response);
  } catch (error) {
    console.log(error);
    res.send([]);
  }
}
