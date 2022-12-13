import Checkbox from '../../components/Form/Checkbox/Checkbox';
import DatePicker from '../../components/Form/DatePicker/DatePicker';
import RadioButton from '../../components/Form/RadioButton/RadioButton';
import Select from '../../components/Form/Select/Select';
import SelectImages from '../../components/Form/SelectImages/SelectImages';
import TextArea from '../../components/Form/TextArea/TextArea';
import TextField from '../../components/Form/TextField/TextField';
import { countries } from '../countries';

type InputData = {
  Component: React.FC;
  props: {
    name: string;
    defaultValue?: string;
    label?: string;
    className?: string;
    isMulti?: boolean;
    title?: string;
    options?: {
      id?: string;
      value?: string;
      label?: string;
      image?: string;
      color?: string;
    }[];
  };
};

type QuestionnaireInputDataProps = {
  personalDetails: InputData[];
  experience: InputData[];
  skills: InputData[];
  achievements: {
    nfts: InputData[];
    poaps: InputData[];
  };
  credentials: {
    nfts: InputData[];
    poaps: InputData[];
  };
  projects: {
    nfts: InputData[];
    poaps: InputData[];
  };
  communities: {
    nfts: InputData[];
    poaps: InputData[];
  };
  conferences: {
    nfts: InputData[];
    poaps: InputData[];
  };
};

export const QUESTIONNAIRE_PATHS = [
  '/create/personal',
  '/create/experience',
  '/create/skills',
  '/create/achievements',
  '/create/credentials',
  '/create/projects',
  '/create/communities',
  '/create/conferences',
];

export const QUESTIONNAIRE_PAGE_NAMES = {
  '/create/personal': 'Personal Details',
  '/create/experience': 'Experience',
  '/create/skills': 'Skills',
  '/create/achievements': 'Achievements',
  '/create/credentials': 'Credentials & Certifications',
  '/create/projects': 'Projects',
  '/create/communities': 'Communities & DAOs',
  '/create/conferences': 'Conferences & Events',
};

export const QUESTIONNAIRE_INPUT_DATA: QuestionnaireInputDataProps = {
  personalDetails: [
    {
      Component: TextField,
      props: {
        name: 'firstName',
        label: 'First Name',
      },
    },
    {
      Component: TextField,
      props: {
        name: 'lastName',
        label: 'Last Name',
      },
    },
    {
      Component: RadioButton,
      props: {
        name: 'pronouns',
        label: 'Preferred pronouns',
        options: [
          { id: 'She/Her', label: 'She/Her' },
          { id: 'He/Him', label: 'He/Him' },
          { id: 'They/Them', label: 'They/Them' },
        ],
      },
    },
    {
      Component: TextField,
      props: {
        name: 'title',
        label: 'Title',
      },
    },
    {
      Component: Select,
      props: {
        name: 'nationality',
        label: 'Where are you from?',
        options: countries,
      },
    },
    {
      Component: TextArea,
      props: {
        name: 'description',
        label: 'Description',
      },
    },
    {
      Component: TextField,
      props: {
        name: 'location',
        label: 'Where are you based?',
      },
    },
    {
      Component: TextField,
      props: {
        name: 'website',
        label: 'Website',
      },
    },
    {
      Component: TextField,
      props: {
        name: 'discord',
        label: 'Discord handle',
      },
    },
    {
      Component: TextField,
      props: {
        name: 'twitter',
        label: 'Twitter handle',
      },
    },
    {
      Component: TextField,
      props: {
        name: 'instagram',
        label: 'Instagram handle',
      },
    },
    {
      Component: Checkbox,
      props: {
        name: 'openToWork',
        className: 'toggle',
        options: [{ id: 'Yes', label: 'Are you open to work? ', value: 'Yes' }],
      },
    },
  ],
  experience: [
    {
      Component: TextField,
      props: {
        name: 'title',
        label: 'Title',
      },
    },
    {
      Component: Select,
      props: {
        name: 'employmentType',
        label: 'Employment type',
        options: [
          { label: 'Full Time', value: 'full-time' },
          { label: 'Part Time', value: 'part-time' },
          { label: 'Self Employed', value: 'self-employed' },
          { label: 'Freelance', value: 'freelance' },
          { label: 'Contract', value: 'contract' },
          { label: 'Internship', value: 'internship' },
          { label: 'Apprenticeship', value: 'apprenticeship' },
          { label: 'Seasonal', value: 'seasonal' },
        ],
      },
    },
    {
      Component: TextField,
      props: {
        name: 'company',
        label: 'Company, organization, or DAO',
      },
    },
    {
      Component: TextField,
      props: {
        name: 'location',
        label: 'Location',
      },
    },
    {
      Component: Checkbox,
      props: {
        name: 'currentlyWorking',
        className: 'checkmark',
        options: [
          {
            id: 'currentlyWorking',
            label: 'I am currently working in this role',
            value: 'Yes',
          },
        ],
      },
    },
    {
      Component: DatePicker,
      props: {
        name: 'startdate',
        label: 'Start date',
      },
    },
    {
      Component: DatePicker,
      props: {
        name: 'enddate',
        label: 'End date',
      },
    },
  ],
  skills: [
    {
      Component: Select,
      props: {
        name: 'skills',
        label: 'Add up to 10 relevant skills.',
        isMulti: true,
        options: [
          {
            value: 'product-design',
            label: 'Product Design',
            color: '#54a0ff',
          },
          { value: 'figma', label: 'Figma', color: '#0445af' },
          {
            value: 'design-thinking',
            label: 'Design Thinking',
            color: '#ff9ff3',
          },
          {
            value: 'content-strategy',
            label: 'Content Strategy',
            color: '#ff6b6b',
          },
          { value: 'wireframing', label: 'Wireframing', color: '#f368e0' },
          {
            value: 'user-center-design',
            label: 'User-center Design',
            color: '#ee5253',
          },
          { value: 'ux', label: 'User Experience (UX)', color: '#ff9f43' },
          { value: 'sketch', label: 'Sketch', color: '#5f27cd' },
          {
            value: 'frontend-dev',
            label: 'Frontend Development',
            color: '#feca57',
          },
          { value: 'react', label: 'React', color: '#0be881' },
        ],
      },
    },
  ],
  achievements: {
    nfts: [
      {
        Component: SelectImages,
        props: {
          name: 'achievements_nfts',
          label: 'Add up to six achievements. Up to 3 NFTs and up to 3 POAPs.',
          title: 'NFTs',
          className: 'box',
          options: [
            {
              id: '1',
              value: 'web3con 2022 Grand Prize Winner',
              image:
                'https://img.freepik.com/free-vector/gradient-grainy-gradient-texture_79603-1642.jpg?w=2000',
            },
            {
              id: '2',
              value: 'web3con 2022 Grand Prize Winner',
              image:
                'https://img.freepik.com/free-vector/gradient-grainy-gradient-texture_79603-1642.jpg?w=2000',
            },
            {
              id: '3',
              value: 'web3con 2022 Grand Prize Winner',
              image:
                'https://img.freepik.com/free-vector/gradient-grainy-gradient-texture_79603-1642.jpg?w=2000',
            },
          ],
        },
      },
    ],
    poaps: [
      {
        Component: SelectImages,
        props: {
          name: 'achievements_poaps',
          title: 'POAPs',
          className: 'circle',
          options: [
            {
              id: '4',
              value: 'web3con 2022 Grand Prize Winner',
              image:
                'https://img.freepik.com/free-vector/gradient-grainy-gradient-texture_79603-1642.jpg?w=2000',
            },
          ],
        },
      },
    ],
  },
  credentials: {
    nfts: [
      {
        Component: SelectImages,
        props: {
          name: 'credentials_nfts',
          label:
            'Choose the NFTs and POAPs that best highlight your experience.',
          title: 'NFTs',
          className: 'box',
          options: [
            {
              id: '1',
              value: 'web3con 2022 Grand Prize Winner',
              image:
                'https://img.freepik.com/free-vector/gradient-grainy-gradient-texture_79603-1642.jpg?w=2000',
            },
            {
              id: '2',
              value: 'web3con 2022 Grand Prize Winner',
              image:
                'https://img.freepik.com/free-vector/gradient-grainy-gradient-texture_79603-1642.jpg?w=2000',
            },
            {
              id: '3',
              value: 'web3con 2022 Grand Prize Winner',
              image:
                'https://img.freepik.com/free-vector/gradient-grainy-gradient-texture_79603-1642.jpg?w=2000',
            },
          ],
        },
      },
    ],
    poaps: [
      {
        Component: SelectImages,
        props: {
          name: 'credentials_poaps',
          title: 'POAPs',
          className: 'circle',
          options: [
            {
              id: '4',
              value: 'web3con 2022 Grand Prize Winner',
              image:
                'https://img.freepik.com/free-vector/gradient-grainy-gradient-texture_79603-1642.jpg?w=2000',
            },
          ],
        },
      },
    ],
  },
  projects: {
    nfts: [
      {
        Component: SelectImages,
        props: {
          name: 'projects_nfts',
          label:
            'Choose projects in which you are a founder, builder or contributor.',
          title: 'NFTs',
          className: 'box',
          options: [
            {
              id: '1',
              value: 'web3con 2022 Grand Prize Winner',
              image:
                'https://img.freepik.com/free-vector/gradient-grainy-gradient-texture_79603-1642.jpg?w=2000',
            },
            {
              id: '2',
              value: 'web3con 2022 Grand Prize Winner',
              image:
                'https://img.freepik.com/free-vector/gradient-grainy-gradient-texture_79603-1642.jpg?w=2000',
            },
            {
              id: '3',
              value: 'web3con 2022 Grand Prize Winner',
              image:
                'https://img.freepik.com/free-vector/gradient-grainy-gradient-texture_79603-1642.jpg?w=2000',
            },
          ],
        },
      },
    ],
    poaps: [
      {
        Component: SelectImages,
        props: {
          name: 'projects_poaps',
          title: 'POAPs',
          className: 'circle',
          options: [
            {
              id: '4',
              value: 'web3con 2022 Grand Prize Winner',
              image:
                'https://img.freepik.com/free-vector/gradient-grainy-gradient-texture_79603-1642.jpg?w=2000',
            },
          ],
        },
      },
    ],
  },
  communities: {
    nfts: [
      {
        Component: SelectImages,
        props: {
          name: 'communities_nfts',
          label: 'Choose communities that connect with you the most.',
          title: 'NFTs',
          className: 'box',
          options: [
            {
              id: '1',
              value: 'web3con 2022 Grand Prize Winner',
              image:
                'https://img.freepik.com/free-vector/gradient-grainy-gradient-texture_79603-1642.jpg?w=2000',
            },
            {
              id: '2',
              value: 'web3con 2022 Grand Prize Winner',
              image:
                'https://img.freepik.com/free-vector/gradient-grainy-gradient-texture_79603-1642.jpg?w=2000',
            },
            {
              id: '3',
              value: 'web3con 2022 Grand Prize Winner',
              image:
                'https://img.freepik.com/free-vector/gradient-grainy-gradient-texture_79603-1642.jpg?w=2000',
            },
          ],
        },
      },
    ],
    poaps: [
      {
        Component: SelectImages,
        props: {
          name: 'communities_poaps',
          title: 'POAPs',
          className: 'circle',
          options: [
            {
              id: '4',
              value: 'web3con 2022 Grand Prize Winner',
              image:
                'https://img.freepik.com/free-vector/gradient-grainy-gradient-texture_79603-1642.jpg?w=2000',
            },
          ],
        },
      },
    ],
  },
  conferences: {
    nfts: [
      {
        Component: SelectImages,
        props: {
          name: 'conferences_nfts',
          label:
            'Choose conferences and events you are most proud to have attended.',
          title: 'NFTs',
          className: 'box',
          options: [
            {
              id: '1',
              value: 'web3con 2022 Grand Prize Winner',
              image:
                'https://img.freepik.com/free-vector/gradient-grainy-gradient-texture_79603-1642.jpg?w=2000',
            },
            {
              id: '2',
              value: 'web3con 2022 Grand Prize Winner',
              image:
                'https://img.freepik.com/free-vector/gradient-grainy-gradient-texture_79603-1642.jpg?w=2000',
            },
            {
              id: '3',
              value: 'web3con 2022 Grand Prize Winner',
              image:
                'https://img.freepik.com/free-vector/gradient-grainy-gradient-texture_79603-1642.jpg?w=2000',
            },
          ],
        },
      },
    ],
    poaps: [
      {
        Component: SelectImages,
        props: {
          name: 'conferences_poaps',
          title: 'POAPs',
          className: 'circle',
          options: [
            {
              id: '4',
              value: 'web3con 2022 Grand Prize Winner',
              image:
                'https://img.freepik.com/free-vector/gradient-grainy-gradient-texture_79603-1642.jpg?w=2000',
            },
          ],
        },
      },
    ],
  },
};
