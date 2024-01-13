import React from 'react';
import { HiCloudUpload } from "react-icons/hi";
import cn from "classnames";

const defaultIcon = (<HiCloudUpload />)

export const Card = ({
  icon,
  color = "white",
  title="Easy Deployment",
  text="Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
  children
}) => {

  const childrenHasIcon = Array.isArray(children) && children.some(item => item.props.className.includes('icon'))

  return (
    <div className='Card'>
      {icon
        ? <div className={cn(`Card__icon`, color)}>
          {icon}
        </div>
        : (!children || !childrenHasIcon) && <div className="Card__icon blue">
          {defaultIcon}
        </div>}
      {children
        ? children
        : <>
          <h4 className='Card__title'>{title}</h4>
          <p className='Card__text'>{text}</p>
        </>}
    </div>
  )
}
