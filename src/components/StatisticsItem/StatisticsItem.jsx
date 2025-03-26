import css from './StatisticsItem.module.css';
import { IconContext } from 'react-icons';

const StatisticsItem = ({ title, total, icons }) => {
  return (
    <>
      <IconContext.Provider value={{ color: 'black', size: '30px' }}>
        {icons}
      </IconContext.Provider>
      <span className={css.counter}>{total}</span>
      <p className={css.text}>{title}</p>
    </>
  );
};

export default StatisticsItem;
