import { useMemo } from 'react';
import { useFormData } from '../../context/index';
import PillsModule from '../../components/PillsModule/PillsModule';
import { BaseNFTPage, NFT_PAGE_CONFIG } from '../../components/NFTTemplate/NFTTemplate';

export default function Conferences() {
  const { touchedData: { conferences} } = useFormData();

  const selectedData = useMemo(() => {
    const selectedNFTs = (conferences?.conferences_nfts || []).map((a) => ({
      image: a.image,
      title: a.value.title,
    }));

    const selectedPoaps = (conferences?.conferences_poaps || []).map((a) => ({
      count: a.value.event.supply,
      image: a.image,
      title: a.value.event.name,
    }));

    return [].concat(selectedNFTs, selectedPoaps);
  }, [conferences?.conferences_nfts, conferences?.conferences_poaps]);

  return (
    <BaseNFTPage page={NFT_PAGE_CONFIG.conferences}>
      <PillsModule
        data={selectedData}
        label="Conferences & Events"
        style={{ maxWidth: '388px' }}
      />
    </BaseNFTPage>
  )
}
