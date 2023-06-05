import React from 'react'

export default function TableData(props) {
    if(props.type==="first"){
        return(
            <td className="text-lg font-medium px-20 py-4 text-left rounded-l-lg">{props.children}</td>
        )
    }
    if(props.type==="last"){
        return(
            <td className="text-lg font-medium px-20 py-4 text-left rounded-r-lg">{props.children}</td>
        )
    }
  return (
    <td className="text-lg font-medium px-20 py-4 text-left">{props.children}</td>
  )
}
