import React, { useState, useEffect } from 'react';
import style from './Tag.module.scss';

const Tag = (props) => {
  const { el, setTags, tags, ind } = props;
  const [tag, setTag] = useState(el);

  useEffect(() => {
    let arr = [...tags];
    arr[ind] = tag;
    setTags([...arr]);
  }, [tag]);

  return (
    <div className={style.tag}>
      <input
        autoFocus
        type="text"
        value={tag}
        onChange={(a) => {
          setTag(a.target.value);
        }}
      />
      <span
        onClick={() => {
          console.log('dell', ind);
          setTags([...tags.filter((t) => t !== el)]);
        }}
      >
        Delete
      </span>
    </div>
  );
};
export default Tag;
