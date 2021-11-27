import React from "react"
import { BaseComponentProps } from "@/types"

function Title(props: BaseComponentProps) {
  const { children } = props

  return <h1 style={{ textAlign: `center`, fontSize: `50px` }}>{children}</h1>
}

export default Title
