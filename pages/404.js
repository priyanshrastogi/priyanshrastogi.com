import React, { useEffect } from 'react';
import Router from 'next/router';

export default function Page404() {

  useEffect(() => {
    Router.push('/');
  });

  return <div>404</div>;

}