import React from 'react';
import styles from '../styling/Home.module.scss'; //???????
import { useNavigate } from 'react-router';
import { JsxElement } from 'typescript';

const NotFound = () => {
  // return <div className={styles.container}>Hello World!</div>;
  const navigate = useNavigate();
  return (
    <section>
        {/* <div className='container mx-auto min-h-screen px-6 py-12 lg:flex lg:items-center lg:gap-12'> */}
          <div>
            <p>
              404 error
            </p>
            <h1>
              Page not found
            </h1>
            <p>
              Sorry, the page you are looking for doesn't exist. Here are some
              helpful links:
            </p>

            <div>
              <button>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='currentColor'
                  className='h-5 w-5 rtl:rotate-180'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18'
                  />
                </svg>

                <button onClick={() => navigate(-1)}>Go back</button>
              </button>
              <button onClick={() => navigate('/')} >
                Take me home
              </button>
            </div>
          </div>

          <div>
            <img
              className='w-full max-w-lg lg:mx-auto'
              src='https://merakiui.com/images/components/illustration.svg'
              alt=''
            />
          </div>
        {/* </div> */}
      </section>
  )
}

export default NotFound;
