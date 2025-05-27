import React from 'react';
import styles from './AnatomySection.module.css';
import humanBodyOutline from '../../assets/images/HumanBody.png';
import Blocks from '../MiniDiv/blocks'
import ActivityChart from '../ActivityChart/activitychart';
import { MdZoomIn } from 'react-icons/md';

function AnatomySection() {
  return (
    <div className={styles.anatomySection}>
      <h3 className={styles.sectionTitle}>DashBoard</h3>
      <div className={styles.anatomyVisual}> 
        <img src={humanBodyOutline} alt="Human Body Outline" className={styles.bodyOutline} /> 
        <MdZoomIn className={styles.zoomIcon} />
        <Blocks />
        <div className={styles.detailsLink}>Details  →</div>
         <div  className={styles.floatingDiv} style={{ top: '25%', left: '56%' }}>
         ❤️ Healthy Heart
        </div>
        <div className={styles.floatingDiv} style={{ top: '67%', left: '10%',backgroundColor:'cyan',color:'navy' }}>
         🦵Healthy Right Leg
        </div>
      </div>
      <ActivityChart />
    </div>
  );
}

export default AnatomySection;