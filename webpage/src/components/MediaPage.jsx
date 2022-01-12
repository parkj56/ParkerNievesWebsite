import React from "react"
import './Media.css'


function MediaPage() {
  return(
    <div class='media'>
      <ul>
        <li class='item'>
          <span class='icon'>
            <a href="https://github.com/parkj56"><ion-icon name="logo-github"></ion-icon></a>
          </span>
          <span class='text'> Projects and Source Code </span>
        </li>

        <li class='item'>
          <span class='icon'>
            <a href="https://www.linkedin.com/in/parker-nieves-129593208/"><ion-icon name="logo-linkedin"></ion-icon></a>
          </span>
          <span class='text'> Connect with me on LinkedIn! </span>
        </li>


        <li class='item'>
          <span class='icon'>
            <a href="https://join.slack.com/t/slack-vzc9755/shared_invite/zt-11ctjgb3o-lIgBKgYnpGqcosv7FBZVZA"><ion-icon name="logo-slack"></ion-icon></a>
          </span>
          <span class='text'> Join my workspace! </span>
        </li>
      </ul>
    </div>
    
  )
}
 
export default MediaPage;