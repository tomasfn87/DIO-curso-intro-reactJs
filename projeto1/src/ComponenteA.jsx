import React from "react"

function ComponenteA(props) {
    return (
        <div>
            <h1>Componente A</h1>
            <div>{props.children}</div>
        </div>
    )
}

export default ComponenteA