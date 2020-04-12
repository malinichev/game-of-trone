import React from 'react';
import { Alert } from 'react-bootstrap';


const Warning = ({ isError }) => {
  if (isError.error) {
    return (
      <div style={{ margin: "10px auto", width: '50%' }}>
        <Alert style={{ width: '100%' }} variant='warning'>
          Error Is: {isError.message}
        </Alert>
      </div>
    );
  } else {
    return <span></span>
  }
}

export default Warning