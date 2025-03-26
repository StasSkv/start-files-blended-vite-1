import { formatDistanceToNow } from 'date-fns';

const formatDateToNow = postedAt => {
  return formatDistanceToNow(new Date(postedAt), { addSuffix: true });
};

export default formatDateToNow;
