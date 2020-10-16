import React from "react";
const Slug = (props) => {
  console.log(props);
  const { match } = props;
  return <div>Slug: {match.params.slug}</div>;
};

export default Slug;
