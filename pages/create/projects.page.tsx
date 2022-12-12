import { useMemo } from 'react';
import { useFormData } from '../../context/Form';
import HeroCardsModule from '../../components/HeroCardsModule/HeroCardsModule';
import { BaseNFTPage, NFT_PAGE_CONFIG } from '../../components/NFTTemplate/NFTTemplate';

export default function Projects() {
  const { touchedData: { projects} } = useFormData();

  const selectedData = useMemo(() => {
    const selectedNFTs = (projects?.projects_nfts || []).map((a) => ({
      tagText: 'Contributor',
      image: a.image,
      title: a.value.title,
    }));

    const selectedPoaps = (projects?.projects_poaps || []).map((a) => ({
      tagText: 'Contributor',
      image: a.image,
      title: a.value.event.name,
    }));

    return [].concat(selectedNFTs, selectedPoaps);
  }, [projects?.projects_nfts, projects?.projects_poaps]);

  return (
    <BaseNFTPage page={NFT_PAGE_CONFIG.projects}>
      <HeroCardsModule
        label="Projects"
        data={selectedData}
        style={{ maxWidth: '388px' }}
      />
    </BaseNFTPage>
  )
}
