import { useRouter } from 'next/router';

const History = (href) => {
  const history = useRouter();
  history.push(href);
};

export default History;
