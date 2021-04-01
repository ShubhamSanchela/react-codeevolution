import React from 'react'
import ReactDom from 'react-dom'

function Portal() {
    return ReactDom.render(<h1>Portals demo</h1>, document.getElementById("portal-root"))
}

export default Portal
