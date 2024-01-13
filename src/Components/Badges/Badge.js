import React from 'react';
import cn from "classnames";

export const Badge = ({
children, 
color="grey", 
shape="square", 
text="Badge"
}) => {
  return (
    <div className={cn('Badge', shape, color)}>
    {children? children:text}
    </div>
  )
}
