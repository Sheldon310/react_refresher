import { useState, useEffect } from 'react';
import MeetupList from '../components/meetups/MeetupList'

const AllMeetups = () => { // 在這不能使用 async await，因為 react 函式必須是同步的，不能回傳 promise，而是必須直接回傳 JSX
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      'https://react-getting-started-69a62-default-rtdb.firebaseio.com/meetups.json'
    ).then((response) => {
      return response.json(); // response.json() 是回傳一個 promise
    }).then((data) => { // firebase 回傳資料是 data，要處理成陣列
      const meetups = [];
      for (const key in data) { // for in 使用在物件上
        const meetup = {
          id: key,
          ...data[key]
        };
        meetups.push(meetup)
      };
      setIsLoading(false);
      setLoadedMeetups(meetups);
    });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  };

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
};

export default AllMeetups;