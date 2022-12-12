import { useRouter } from "next/router";
import { createContext, useContext, useEffect, useState } from "react";
import swr from "swr";
import { useFormData } from ".";

export interface Contract {
      address: string;
      tokenType: string;
  }

  export interface Attribute {
      value: any;
      trait_type: string;
      display_type: string;
  }

  export interface RawMetadata {
      name: string;
      description: string;
      image: string;
      external_url: string;
      attributes: Attribute[];
  }

  export interface TokenUri {
      raw: string;
      gateway: string;
  }

  export interface Medium {
      raw: string;
      gateway: string;
  }

  export interface Kudos {
      contract: Contract;
      tokenId: string;
      tokenType: string;
      title: string;
      description: string;
      timeLastUpdated: string;
      rawMetadata: RawMetadata;
      tokenUri: TokenUri;
      media: Medium[];
      balance: number;
  }



type NFTContextProps = {
  achievements: {
    id: string;
    value: Kudos;
    image: string;
  }[];
  poaps: poaps[];
}

export interface PoapEvent {
  id: number;
  fancy_id: string;
  name: string;
  event_url: string;
  image_url: string;
  country: string;
  city: string;
  description: string;
  year: number;
  start_date: string;
  end_date: string;
  expiry_date: string;
  supply: number;
}

export interface PoapNFT {
  event: PoapEvent;
  tokenId: string;
  owner: string;
  chain: string;
  created: string;
}

export type poaps = {
  id: string;
  value: PoapNFT;
  image: string;
}

const baseURL = '/api/nfts';

const nftFetcher = async (address?: string): Promise<Kudos[]> => {
  const url = `${baseURL}/kudos/${address}`;
  const response = await fetch(url);
  return response.json();
};

const poapFetcher = async (address?: string): Promise<PoapNFT[]> => {
  const url = `${baseURL}/poaps/${address}`;
  const response = await fetch(url);
  return response.json();
};

const useNFT = (address?: string) => swr(`nfts-${address}`, () => nftFetcher(address));

const usePoaps = (address?: string) =>  swr(`poaps-${address}`, () => poapFetcher(address));

// context
export const NFTContext: React.Context<NFTContextProps> = createContext({} as NFTContextProps);

const VALID_PATHS = [
  '/create/achievements',
  '/create/credentials',
  '/create/communities',
  '/create/conferences',
  '/create/projects',
]

export const formatPoaps = (data: PoapNFT[]) => {
  return data?.map((nft: PoapNFT) => ({
    id: `${nft?.event?.id}-${nft.tokenId}`,
    value: nft,
    image: nft?.event?.image_url,
  }));
}

export const formatNFTs = (data: Kudos[]) => {
  return data?.map((nft: Kudos) => ({
    id: `${nft?.contract?.address}-${nft.tokenId}`,
    value: nft,
    image: nft?.rawMetadata?.image,
  }));
}

const NFTProvider = ({ children }) => {
  const { asPath } = useRouter();
  const isEnabled = VALID_PATHS.includes(asPath);

  const [address, setAddress] = useState<string>();

  const [achievements, setAchievements] = useState<{
    id: string;
    value: Kudos;
    image: string;
  }[]>([]);
  const [poaps, setPoaps] = useState<poaps[]>([]);

  const { data } = usePoaps(address);
  const { data: nftsData } = useNFT(address);

  useEffect(() => {
    if (nftsData?.length) {
      setAchievements(formatNFTs(nftsData));
    }
  }, [nftsData]);

  useEffect(() => {
    if (data?.length) {
      setPoaps(formatPoaps(data));
    }
  }, [data]);

  useEffect(() => {
    if (isEnabled) {
      setAddress('0x3a3926b0fe88a03e8a6ba591c8eb0612f2053c9c');
    }
  }, [isEnabled]);

  return (
    <NFTContext.Provider value={{ achievements, poaps }}>
      {children}
    </NFTContext.Provider>
  )
}

const useNFTs = () => {
  const context = useContext(NFTContext);
  if (context === undefined) {
    throw new Error('useNFTs must be used within a NFTProvider');
  }
  return context;
}

export { NFTProvider, useNFTs };
