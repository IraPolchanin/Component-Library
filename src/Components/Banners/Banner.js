import React from 'react';
import cn from "classnames"
import { FaCircleCheck } from "react-icons/fa6";
import { FaTriangleExclamation } from "react-icons/fa6";
import { GoXCircleFill } from "react-icons/go";
import { FaCircleInfo } from "react-icons/fa6";

export const Banner = ({
  status = "success",
  multi,
  title,
  text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.",
  children
}) => {
  const defaultTitle = status === "success" ? "Congratulations!"
    : status === "warning" ? "Attention"
      : status === "error" ? "There is a problem with your application"
        : "Update available";

  const icon = status === "success" ? <FaCircleCheck className="Banner__icon" />
    : status === "warning" ? <FaTriangleExclamation className="Banner__icon" />
      : status === "error" ? <GoXCircleFill className="Banner__icon" />
        : <FaCircleInfo className="Banner__icon" />

  const colorStyle = status === "success" ? "green"
    : status === "warning" ? "yellow"
      : status === "error" ? "red"
        : "blue"

  return (
    <div className={cn('Banner', colorStyle)}>
      {icon}
      <div className="Banner__content">
        {multi && children ? children
          : !multi && children ? <h5 className="Banner__title">{children}</h5>
            : <>
              <h5 className="Banner__title">{title ? title : defaultTitle}</h5>
              {multi &&
                <p className="Banner__text">{text}</p>
              }
            </>
        }
      </div>
    </div>
  )
}
