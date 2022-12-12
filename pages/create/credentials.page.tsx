import { useMemo } from 'react';
import { useFormData } from '../../context/index';
import Certifications from '../../components/Certifications/Certifications';
import { BaseNFTPage, NFT_PAGE_CONFIG } from '../../components/NFTTemplate/NFTTemplate';
import { formatDate } from '../../utils';

export default function Credentials() {
  const { touchedData: { credentials } } = useFormData();

  const selectedData = useMemo(() => {
    const selectedNFTs = (credentials?.credentials_nfts || []).map((a) => ({
      date: formatDate(a.value.timeLastUpdated),
      image: a.image,
      title: a.value.title,
    }));

    const selectedPoaps = (credentials?.credentials_poaps || []).map((a) => ({
      date: formatDate(a.value.created),
      image: a.image,
      totalOwners: a.value.event.supply,
      title: a.value.event.name,
    }));

    return [].concat(selectedNFTs, selectedPoaps);
  }, [credentials?.credentials_nfts, credentials?.credentials_poaps]);

  return (
    <BaseNFTPage page={NFT_PAGE_CONFIG.credentials}>
      <Certifications data={selectedData} style={{ minWidth: '700px' }} />
    </BaseNFTPage>
  );
}
