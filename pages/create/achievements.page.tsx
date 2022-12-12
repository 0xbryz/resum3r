import { useMemo } from 'react';
import { useFormData } from '../../context/Form';
import AchievementsCard from '../../components/AchievementsCard/Achievements';
import { BaseNFTPage, NFT_PAGE_CONFIG } from '../../components/NFTTemplate/NFTTemplate';

export default function Achievements() {
  const { touchedData: { achievements} } = useFormData();

  // selected data combines touchedData and and filters out duplicates
  const selectedData = useMemo(() => {
    return {
      poaps: achievements?.achievements_poaps,
      nfts: achievements?.achievements_nfts,
    }
  }, [achievements?.achievements_nfts, achievements?.achievements_poaps]);

  return (
    <BaseNFTPage page={NFT_PAGE_CONFIG.achievements}>
      <AchievementsCard data={selectedData} style={{ maxWidth: '700px' }} />
    </BaseNFTPage>
  )
}
