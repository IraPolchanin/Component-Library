import React, { useState } from 'react';
import cn from "classnames";
import { PiArchiveTray } from "react-icons/pi";
import { FaXmark } from "react-icons/fa6";

export const Tooltip = ({
  children,
  color = "black",
  title = "Archive notes",
  icon,
  text = "Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur."
}) => {
  const [display, setDisplay] = useState(true);
  const toggleDisplay = () => setDisplay(!display);
  const childrenHasIcon = Array.isArray(children) && children.some(item => item.props.className.includes('icon'));

  return (
    display && <div className={cn('Tooltip', color)}>
      <div className='Tooltip__icon'>
        {icon ? icon
        :childrenHasIcon?null
        : <PiArchiveTray />}
      </div>
      
      {children ? children :
        <>
          <div className='Tooltip__content'>
            <h5 className='Tooltip__title'>{title}</h5>
            <h5 className='Tooltip__text'>{text}</h5>
          </div>
        </>
      }
      <FaXmark className='Tooltip__icon Tooltip__icon-close' onClick={toggleDisplay} />

    </div>
  )
}

