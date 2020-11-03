import React, { useState, useEffect } from 'react';

const Tag = (props) => {
  console.log(props);
  const { el, setTags, tags } = props;
  const [tag, setTag] = useState(el);
  
    console.log('el', el,'tag',tag)

  return (
    <div>
      <input
        type="text"
        value={tag}
        onChange={(a) => {
       
          setTag(a.target.value);

          // setTags([...tags, tag])
        }}
      />
      <span>Delete</span>
    </div>
  );
};
export default Tag;
