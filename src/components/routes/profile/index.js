import React from 'react';

import authCheck from '../../layouts/auth-wrapper';

const ProfilePage = () => (
  <div>
    ProfilePage
  </div>
);

export default authCheck({ withAuth: true })(ProfilePage);
