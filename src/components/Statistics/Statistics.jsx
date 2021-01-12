import React from 'react';
import PropTypes from 'prop-types';
import stylesStatistics from '../Statistics/Statistics.module.css'

const Statistics = ({title, stats}) => {
  return (
    <section className={stylesStatistics.statistics}>
      {title && <h2 className={stylesStatistics.title}>{title}</h2>}

      <ul className={stylesStatistics.statList}>
        {
         stats.map((stat) => {

      return (<li className={stylesStatistics.item} key={stat.id}>
      <span className={stylesStatistics.label}>{stat.label}</span>
      <span className={stylesStatistics.percentage}>{stat.percentage}%</span>
    </li> )
          })
        }

  </ul>
</section>
  )
   
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object),
};

export default Statistics;