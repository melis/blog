import React, { useState, useEffect } from 'react';

const Tag = (props) => {
  console.log(props);
  const { el } = props;
  const [tag, setTag] = useState(el);
  return (
    <div>
      <input
        type="text"
        value={tag}
        onChange={(a) => {
          setTag(a.target.value);
        }}
      />
      <span>Delete</span>
    </div>
  );
};
export default Tag;
