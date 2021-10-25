import React from "react"

function ComponenteB(props) {
    return (
        <div>
            <h2>Componente B</h2>
            <div>{props.children}</div>
        </div>
    )
}

export default ComponenteB