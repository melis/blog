import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
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
          setTags([...tags.filter((t) => t !== el)]);
        }}
      >
        Delete
      </span>
    </div>
  );
};

Tag.propTypes = {
  el: PropTypes.string,
  setTags: PropTypes.func,
  tags: PropTypes.array,
  ind: PropTypes.number,
};
export default Tag;
