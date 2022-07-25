/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import * as React from 'react';
import { useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { useLocation } from 'react-router-dom';

export default function HomePage() {
  const location = useLocation();
  const queryString = location.hash;
  const queryArr = queryString.split('&');
  const accessTokenParam = queryArr.find(query => query.includes('access_token'));
  const startAt = accessTokenParam?.indexOf('=');
  const accessToken = accessTokenParam?.slice(startAt && startAt + 1);

  useEffect(() => {
    fetch(`https://www.googleapis.com/oauth2/v3/userinfo?access_token=${accessToken}`).then(res => {
      return res.json();
    }).then(data => {
      console.log(data);
    })
  }, [accessToken])

  console.log(accessToken);
  return (
    <>
      <h1>
        <FormattedMessage {...messages.header} />
      </h1>
      {/* <p>{accessToken || 'ahihi' }</p> */}
    </>
  );
}
