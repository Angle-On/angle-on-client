/* eslint-disable max-len */
import React from 'react';
import PanelTextField from './PanelTextField'; 
import DeleteProfileButton from './DeleteProfileButton'; 
import FilmerSubmissionTable from './FilmerSubmissionTable'; 

import filmer from './mock-data/mockfilmer'; 

const FilmerPanel = ({ user }) => {
  console.log(user);

  return (
    <>
      <h1>Director Panel</h1>
      <h1>User Information</h1>
      <PanelTextField {...filmer} /> 
      <h1>Short Film Submissions</h1>
      <FilmerSubmissionTable user={user} /> 
      <DeleteProfileButton /> 
      <p>Donations will not be refunded, please contact support@angle-on.com if you have further questions</p>
      <button onClick={() => window.location.replace('/filmer-application')}>Add New Film Submission</button>
    </>
  );
}; 
export default FilmerPanel;
