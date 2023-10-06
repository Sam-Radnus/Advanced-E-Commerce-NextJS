import { useRef, useEffect } from 'react';
import './styles/Newsletter.scss';

export default function Newsletter () {
 


  const handleSubmit = async () => {
   

  
   
  };



  return (
    <>
      <section className={`section`}>
        <div className={`newsletter_container`}>
          <h3 className={`title`}>Sign up for the ASOS newsletter</h3>
          <form
            className={`form`}
        onSubmit={handleSubmit}
            
          >
            {true && (
              <>
                <input
                  className={`input`}
                  placeholder="Your email address"
                  type="email"
                  required
                />
                <button type="submit" className={`button`}>
                  Sign up
                </button>
              </>
            )}
            {false && (
              <button type="button" className={`success`} disabled>
                Success
              </button>
            )}
          </form>
        </div>
      </section>
    </>
  );
};

