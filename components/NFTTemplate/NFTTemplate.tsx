import { useCallback, useMemo, useRef } from "react";
import { useFormData } from "../../context/Form";
import { useNFTs } from "../../context/useNFTs";
import SelectImages from "../Form/SelectImages/SelectImages";
import styles from '../../pages/create/Questionnaire.module.scss';
import { Form } from "@unform/web";
import Link from "next/link";
import Preview from "../Preview/Preview";
import Button from "../Button/Button";


type Props = {
  label?: string;
  formKey: string;
  name: string;
  title?: string;
}

const isChecked = (touched: any[], id: string) => {
  const items = touched || [];
  return items.filter((i) => i.id === id).length > 0;
}

export const SelectNFTs = ({ label, formKey, name, title = 'NFTs' }: Props) => {
  const { achievements } = useNFTs();
  const { touchedData } = useFormData();

  const options = useMemo(() => achievements.map((a) => ({
    id: a.id,
    value: JSON.stringify(a.value),
    image: a.image,
    label: a.value?.title,
    checked: isChecked(touchedData?.[formKey]?.[name], a.id),
  })), [achievements, formKey, name, touchedData]);
  return (
    <SelectImages
      className={'box'}
      label={label}
      title={title}
      name={name}
      options={options}
    />
  );
};

export const SelectPoaps = ({ label, formKey, name, title = 'POAPs' }: Props) => {
  const { poaps } = useNFTs();
  const { touchedData } = useFormData();

  const options = useMemo(() => poaps.map((a) => ({
    id: a.id,
    value: JSON.stringify(a.value),
    image: a.image,
    label: a.value?.event?.name,
    checked: isChecked(touchedData?.[formKey]?.[name], a.id),
  })
  ), [poaps, formKey, name, touchedData]);

  return (
    <SelectImages
      className={'circle'}
      label={label}
      title={title}
      name={name}
      options={options}
    />
  );
};

export const enum NFTPageType {
  achievements = 'achievements',
  credentials = 'credentials',
  projects = 'projects',
  communities = 'communities',
  conferences = 'conferences',
}

type NFTPageConfig = {
  headline: string;
  label: string;
  name: NFTPageType;
  next?: NFTPageType;
  nftsOnly?: boolean;
  limit?: number;
}

export const NFT_PAGE_CONFIG = {
  [NFTPageType.achievements]: {
    headline: 'Achievements',
    name: NFTPageType.achievements,
    label:  'Add up to six achievements. Up to 3 NFTs and up to 3 POAPs.',
    next: NFTPageType.credentials,
    limit: 3,
  },
  [NFTPageType.credentials]: {
    headline: 'Credentials & Certifications',
    label: 'Choose the NFTs and POAPs that best highlight your experience.',
    name: NFTPageType.credentials,
    next: NFTPageType.projects,
  },
  [NFTPageType.projects]: {
    headline: 'Projects',
    label: 'Choose projects in which you are a founder, builder or contributor.',
    name: NFTPageType.projects,
    next: NFTPageType.communities,
  },
  [NFTPageType.communities]: {
    headline: 'Communities & DAOs',
    label: 'Choose communities that connect with you the most.',
    name: NFTPageType.communities,
    next: NFTPageType.conferences,
    nftsOnly: true,
  },
  [NFTPageType.conferences]: {
    headline: 'Conferences & Events',
    label: 'Choose the conferences and events you are most proud to have attended.',
    name: NFTPageType.conferences,
  },
}

type BaseNFTPageProps = {
  children?: React.ReactNode;
  page: NFTPageConfig;
}

export const BaseNFTPage = ({ children, page }: BaseNFTPageProps) => {
  const { headline, name, label, next, nftsOnly, limit } = page;
  const { setFormValues, setTouchedData, touchedData } = useFormData();
  const { achievements, poaps } = useNFTs()
  const formRef = useRef(null);


  async function handleSubmit(data) {
    try {
      formRef.current.setErrors({});
      setFormValues({ [name]: data });
    } catch (error) {
      console.log(error);
    }
  }

  const isLimit = useCallback((data, isNFT = false) => {
    const nftsKey = `${name}_nfts`;
    const poapsKey = `${name}_poaps`;

    const selectedNFTs = (data?.[name]?.[nftsKey] || [])?.length
    const selectedPoaps = (data?.[name]?.[poapsKey] || [])?.length

    const _isLimit = isNFT ? selectedNFTs >= limit : selectedPoaps >= limit;
    console.log({ selectedNFTs, _isLimit})

    return _isLimit
  }, [limit, name]);

  const handleChange = useCallback((e: any) => {
    const isNFT =  e.target.name.includes('nfts');
    const isChecked = e.target.checked;
    const skip = !!limit && (isLimit(touchedData, isNFT) && isChecked)
    if (skip) {
      console.log({ skip})
      e.preventDefault();
      return;
    } else {
      const data = JSON.parse(e.target.value);
      const isNFT =  e.target.name.includes('nfts');
      // id is a combination of contract address and token id
      const id = data?.contract ? `${data.contract.address}-${data.tokenId}` : `${data.event.id}-${data.tokenId}`;

      // find the selected item in the achievements or poaps array
      const item = isNFT ? achievements.find((a) => a.id === id) : poaps.find((a) => a.id === id);

        if (isChecked) {
          setTouchedData({
             ...touchedData,
            [name]: {
              ...touchedData?.[name],
              [e.target.name]: [].concat(touchedData?.[name]?.[e.target.name] || [], [item])
            }
          })
        } else {
          setTouchedData({
             ...touchedData,
            [name]: {
              ...touchedData?.[name],
              [e.target.name]: (touchedData?.[name]?.[e.target.name] || []).filter((a) => a.id !== id)
            }
          })
        }
    }
  }, [limit, isLimit, achievements, poaps, setTouchedData, touchedData, name]);

  return (
    <div className={styles.form}>
    <div className={styles.left}>
      <h1 className="headline">{headline}</h1>
      <Form ref={formRef} onSubmit={handleSubmit} className={styles.form} onChange={handleChange}>
        <div className={styles.container}>
          <SelectNFTs
            label={label}
            formKey={name}
            name={`${name}_nfts`}
          />
          {!nftsOnly && (
            <SelectPoaps
              formKey={name}
              name={`${name}_poaps`}
            />
          )}
        </div>

        {/* form submit footer */}
        <div>
          {next ? (
            <>
              <Link
                // onClick={() => {
                //   handleSubmit(formRef.current.getData());
                // }}
                href={`/create/${next}`}
              >
                {`Next: ${NFT_PAGE_CONFIG[next].headline}`}
              </Link>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Button onClick={() => handleSubmit(formRef.current.getData())}>
                Save
              </Button>
            </>
          ) : (
            <Button onClick={() => handleSubmit(formRef.current.getData())}>
              Submit
            </Button>
          )}
        </div>
      </Form>
    </div>
    <Preview>
     {children}
    </Preview>
  </div>
  )
}
