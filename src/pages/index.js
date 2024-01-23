import * as React from "react";
import {Link} from 'gatsby';

const Cabecalho = ()=>{
  return(
    <div>
      <h1 className="header-style">Ahoy!!! This is an h1</h1>
      <p>And This is a paragraph</p>
      <Link to="/about">Check more about us here</Link>
    </div>
  )
}

export const Head = () => <title>Home Page</title>

export default Cabecalho;