import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';
import StatisticsItem from '../StatisticsItem/StatisticsItem';
import css from './Statistics.module.css';
const icons = [
  <FaRegThumbsUp key="1" />,
  <MdPeople key="2" />,
  <MdOutlineProductionQuantityLimits key="3" />,
  <GiTreeDoor key="4" />,
];

const Statistics = ({ title, stats }) => {
  return (
    <div>
      <h3 className={css.title}>{title}</h3>
      <ul className={css.list}>
        {stats.map((stat, index) => {
          return (
            <li key={Number(stat.id)} className={css.item}>
              <StatisticsItem
                title={stat.title}
                total={stat.total}
                icons={icons[index]}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Statistics;
