import React from 'react'
import './Avatar.css'

const Avatar = (props) => {
  return (
      <img className={props.class} src={props.picUrl} alt="my profile picture" style ={{height: props.height || "100px", width: props.width || "100px"}}/>
  )
}

export default Avatar
