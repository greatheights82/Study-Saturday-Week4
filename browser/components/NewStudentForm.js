import React from 'react';

export const Form = props => (
  <form>
    <p>
      <label htmlFor="Firstame">First name:</label>
      <input name="Firstname" />
    </p>
    <p>
      <label htmlFor="Firstame">Last name:</label>
      <input name="Lastname" />
    </p>
    <p>
      <label htmlFor="Firstame">First name:</label>
      <input name="Email" />
    </p>
    <button type="submit">Submit</button>
  </form>
);
