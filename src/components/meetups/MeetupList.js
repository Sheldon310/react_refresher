import React from 'react';

import styles from './MeetupList.module.css'
import MeetupItem from './MeetupItem'

const MeetupList = (props) => {

  return (
    <ul className={styles.list}>
      {
        props.meetups.map(meetup =>
          <MeetupItem
            key={meetup.id}
            id={meetup.id}
            image={meetup.image}
            title={meetup.title}
            description={meetup.description}
            address={meetup.address}
            // meetup={meetup} /* 直接傳整個物件，到子元件在解構 */
          />)
      }
    </ul>

  );
};

export default MeetupList;