import { useMemo, useRef } from 'react';
import { Form } from '@unform/web';
import { useFormData } from '../../context/index';
import styles from './Questionnaire.module.scss';
import { communities as x } from '../../pages/data';
import PillsModule from '../../components/PillsModule/PillsModule';
import { QUESTIONNAIRE_INPUT_DATA } from './Questionnaire.data';
import Link from 'next/link';
import Preview from '../../components/Preview/Preview';
import { BaseNFTPage, NFT_PAGE_CONFIG } from '../../components/NFTTemplate/NFTTemplate';

export default function Communities() {
  const { touchedData: { communities} } = useFormData();

  const selectedData = useMemo(() => {
    const selectedNFTs = (communities?.communities_nfts || []).map((a) => ({
      image: a.image,
      title: a.value.title,
    }));

    return [].concat(selectedNFTs);
  }, [communities?.communities_nfts]);

  return (
    <BaseNFTPage page={NFT_PAGE_CONFIG.communities}>
      <PillsModule
        data={selectedData}
        label="Communities & DAOs"
        style={{ maxWidth: '388px' }}
      />
    </BaseNFTPage>
  )
}
