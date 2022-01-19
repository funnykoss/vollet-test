import {React,useState } from 'react';
import s from './SubscriptionForm.module.css';
import { MdArrowForward } from 'react-icons/md';

const SubscriptionForm = () => {
    const [email, setEmail] = useState('');
    const [visible, setVisible] = useState(true);

    const onChange = event => {
    setEmail(event.target.value);
    };
    const onSubmit = event => {
        event.preventDefault();
        console.log(event.target);
        setVisible(false)
        setEmail('')
    }
    return (
        <>
        {!visible
          
          ? (<div className={s.subscribeContainerTitle}>
              <p className={s.subscribeTitle}> Спасибо за подписку! </p>
            </div>)
          
          : <div className={s.subscribeContainer}>
      <h3 className={s.title}>Подписка</h3>
      <form className={s.form} onSubmit={onSubmit}>
        <div className={s.flex}>
          <input
            className={s.input}
            type="text"
            title="Email"
            name="emailSubscription"
            onChange={onChange}
            placeholder="Email"
            value={email}
            
          />
          <button className={s.button}  type="submit">
            <MdArrowForward className={s.icn} />
          </button>
            </div>
             <p className={s.description}>
        Подпишитесь на нашу рассылку
      </p>
      </form>
     
    </div>}
        
        </>
    )
}

export default SubscriptionForm