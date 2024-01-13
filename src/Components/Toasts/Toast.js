import React, { useState } from 'react';
import cn from "classnames"
import { FaCircleCheck } from "react-icons/fa6";
import { FaTriangleExclamation } from "react-icons/fa6";
import { GoXCircleFill } from "react-icons/go";
import { FaCircleInfo } from "react-icons/fa6";

export const Toast = ({
  children,
  color,
  title,
  text,
  icon,
  status = "success",
}) => {
  const [display, setDisplay] = useState(false);
  const defaultInfo = {
    success: { title: "Success", icon: <FaCircleCheck />, text: "Your work has been saved", colorStyle: "green" },
    warning: { title: "Warning", icon: <FaTriangleExclamation className="Banner__icon" />, text: "A network error was detected", colorStyle: "yellow" },
    error: { title: "Error", icon: <GoXCircleFill />, text: "Please re-save your work again", colorStyle: "red" },
    information: { title: "Information", icon: <FaCircleInfo />, text: "Please read updated information", colorStyle: "blue" },
  }

  const colorStyle = color ? color : defaultInfo[status].colorStyle;
  const showPopup = () => {
    setDisplay(!display);
    setTimeout(() => {
      setDisplay(false);
    }, 5000)
  }

  return (
    <div className='Toast'>
      <button className={cn(colorStyle, 'Toast__btn')} onClick={showPopup}>{title ? title : status}</button>
      {display && (
        <div className={cn('Toast__popup', colorStyle)}>
          {children ? children : <>
            <div className="Toast__icon">
              {icon ? icon : defaultInfo[status].icon}
            </div>
            <div className='Toast__content'>
              <h5 className='Toast__title'>{title ? title : defaultInfo[status].title}</h5>
              <p className='Toast__text'>{text ? text : defaultInfo[status].text}</p>
            </div>
          </>}

        </div>
      )}
    </div>
  )
}
