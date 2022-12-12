export const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
};
export const getShortenName = (address?: string) => {
  if (address) {
    const pod1 = address.slice(0, 6);
    const pod2 = address.slice(address.length - 4);
    return `${pod1}...${pod2}`;
  }
  return '';
};
