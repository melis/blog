import React, { useState, useEffect } from 'react';

const Tag = (props) => {
  // console.log(props);
  const { el, setTags, tags } = props;
  const [tag, setTag] = useState(el);
  
    useEffect(()=>{
console.log(tag, props)
    },[tag])

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
