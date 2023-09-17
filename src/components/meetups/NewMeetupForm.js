import { useRef } from 'react';

import styles from './NewMeetupForm.module.css'
import Card from "../ui/Card";

const NewMeetupForm = (props) => {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();


  const submitHandler = (event) => {
    event.preventDefault(); // 不要直接用瀏覽器的預設行為傳送 request (會觸發 reload)，而要用自己的 JS 邏輯處理(不會觸發 reload)

    const enteredTitle = titleInputRef.current.value; // 儲存實際連接值，current 也就是 input 物件，而這個物件裡有 value 屬性，用來讀取輸入值就好，如果有要改變預設值的話，用 useState 方法
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription
    };
    // console.log(meetupData);
    props.onAddMeetup(meetupData);
  };

  return (
    <Card>
      <form className={styles.form} onSubmit={submitHandler}>
        <div className={styles.control}>
          <label htmlFor="title">Meetup Title</label>
          <input
            type="text"
            id="title"
            required
            ref={titleInputRef}
          />
        </div>
        <div className={styles.control}>
          <label htmlFor="image">Meetup Image</label>
          <input
            type="url"
            id="image"
            required
            ref={imageInputRef}
          />
        </div>
        <div className={styles.control}>
          <label htmlFor="address">Meetup Address</label>
          <input
            type="text"
            id="address"
            required
            ref={addressInputRef}
          />
        </div>
        <div className={styles.control}>
          <label htmlFor="description">Meetup Description</label>
          <textarea
            name=""
            id="description"
            cols="30"
            rows="5"
            required
            ref={descriptionInputRef}
          />
        </div>
        <div className={styles.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetupForm;