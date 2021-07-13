import React from 'react'

function Video() {
  return (
    <div className="card-back">
                    <video className="video__container"  muted loop>
                        <source className="video__media" src="./vid/vid2.mp4" type="video/mp4" />
                    </video>
                </div>
  )
}

export default Video
