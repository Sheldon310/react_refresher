import React from "react";
import { useNavigate } from 'react-router-dom';

import NewMeetupForm from "../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
  const navigate = useNavigate();

  const addMeetupHandler = (meetupData) => { // 也可以使用 async await 語法
    // console.log(meetupData);
    fetch(
      'https://react-getting-started-69a62-default-rtdb.firebaseio.com/meetups.json',
      {
        method: 'POST',
        body: JSON.stringify(meetupData), // 轉換成 JSON
        headers: {
          'Content-Type': 'application/json'
        }
      },
    ).then(() => {
      navigate('/');
    });
  };

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
};

export default NewMeetupPage;