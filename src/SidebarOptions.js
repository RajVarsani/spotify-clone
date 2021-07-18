import React from 'react'
import "./SidebarOptions.css"


function SidebarOptions({ title, Icon }) {
    return (
        <div className="sidebarOption">
            {Icon && <Icon className="sidebarOption__icon" />}
            {Icon ? <h4>{title}</h4> : <p>{title}</p>}

        </div>
    )
}

export default SidebarOptions
