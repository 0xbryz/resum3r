import { countries } from '../pages/countries-emojis';

export const getShortenName = (address?: string) => {
  if (address) {
    const pod1 = address.slice(0, 6);
    const pod2 = address.slice(address.length - 4);
    return `${pod1}...${pod2}`;
  }
  return '';
};

export const getCountryEmoji = (countryName) => {
  const flagEmoji = countries.find((country) => {
    return country.country === countryName;
  });
  return flagEmoji.emojiFlag;
};
