import {
  useState,
  createContext,
  useCallback,
  useEffect,
  useContext,
} from 'react';
import { useRouter } from 'next/router';
import { useAccount, useDisconnect } from 'wagmi';
import { ethers } from 'ethers';
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import {
  authenticate,
  challenge,
  getDefaultProfile,
  getProfile,
  getPublications,
  verify,
} from '../../graphql/lens';

export const LensContext = createContext(null);

const API_URL = 'https://api.lens.dev';

/* Configure Apollo GraphQL Client */
const authLink = setContext((_, { headers }) => {
  const token = window.localStorage.getItem('lens-auth-token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const httpLink = createHttpLink({
  uri: API_URL,
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default function LensProvider({ children }) {
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const [profileId, setProfileId] = useState('');
  const [handle, setHandle] = useState('');
  const [session, setSession] = useState(null);
  const [token, setToken] = useState('');
  const [localToken, setlocalToken] = useState('');
  const [profile, setProfile] = useState();
  const [personalDetails, setPersonalDetails] = useState([
    {
      address: address,
      firstName: '',
      lastName: '',
      pronouns: '',
      title: '',
      nationality: [],
      availableForHire: false,
      description: '',
    },
  ]);
  const [publications, setPublications] = useState([]);

  const router = useRouter();

  const fetchProfile = useCallback(async () => {
    try {
      /* fetch the user profile using their handle */
      const returnedProfile = await client.query({
        query: getProfile,
        variables: { handle },
      });
      const profileData = { ...returnedProfile.data.profile };
      /* format their picture if it is not in the right format */
      const picture = profileData.picture;
      if (picture && picture.original && picture.original.url) {
        if (picture.original.url.startsWith('ipfs://')) {
          let result = picture.original.url.substring(
            7,
            picture.original.url.length
          );
          profileData.avatarUrl = `http://lens.infura-ipfs.io/ipfs/${result}`;
        } else {
          profileData.avatarUrl = profileData.picture.original.url;
        }
      }
      setProfile(profileData);

      const newObj = Object.assign(
        {},
        {
          address: address,
          firstName: profileData.name,
          description: profileData.bio,
        }
      );
      setPersonalDetails([newObj as any]);

      /* fetch the user's publications */
      const pubs = await client.query({
        query: getPublications,
        variables: {
          id: profileData.id,
          limit: 50,
        },
      });
      setPublications(pubs.data.publications.items);
    } catch (err) {
      console.log('error fetching profile...', err);
    }
  }, [address, handle]);

  const checkConnection = useCallback(async () => {
    if (address) {
      setlocalToken(localStorage.getItem('lens-auth-token'));

      const response = await client.query({
        query: getDefaultProfile,
        variables: { address: address },
      });
      const hasDefaultProfile = response.data.defaultProfile;

      if (hasDefaultProfile) {
        setProfileId(response.data.defaultProfile.id);
        setHandle(response.data.defaultProfile.handle);

        profileId && handle && fetchProfile();
      }
    }
  }, [address, fetchProfile, handle, profileId]);

  useEffect(() => {
    checkConnection();
  }, [checkConnection]);

  const login = async () => {
    try {
      const challengeInfo = await client.query({
        query: challenge,
        variables: {
          address,
        },
      });
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const signature = await signer.signMessage(
        challengeInfo.data.challenge.text
      );
      const authData = await client.mutate({
        mutation: authenticate,
        variables: {
          address,
          signature,
        },
      });

      console.log('authData: ', authData);

      const {
        data: {
          authenticate: { accessToken, refreshToken },
        },
      } = authData;

      localStorage.setItem('lens-auth-token', refreshToken);
      setToken(refreshToken);
      setSession(refreshToken);

      authData.data.authenticate && profileId && fetchProfile();
      authData.data.authenticate && profileId && router.push('/create');
    } catch (err) {
      console.log('Error signing in: ', err);
    }
  };

  const handleDisconnect = () => {
    disconnect();
    setProfileId('');
    setHandle('');
    setSession(null);
    setToken('');
    router.push('/').then(() => router.reload());
    localStorage.removeItem('lens-auth-token');
  };

  useEffect(() => {
    const _token = localStorage.getItem('lens-auth-token');
    if (_token) {
      setToken(_token);
      setSession(_token);
    }
  }, []);

  return (
    <LensContext.Provider
      value={{
        login,
        handleDisconnect,
        fetchProfile,
        session,
        token,
        localToken,
        profileId,
        handle,
        profile,
        publications,
        personalDetails,
      }}
    >
      {children}
    </LensContext.Provider>
  );
}

export const useLens = () => {
  const context = useContext(LensContext);
  if (context === undefined) {
    throw new Error('useLens must be used within a LensProvider');
  }
  return context;
};
