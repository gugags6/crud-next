import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode } from "react";

export default function Titulo(props: { children: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; }){
    return(
      <div className="flex flex-col justify-center">
        <h1 className="px-5 py-2 text-2xl">
            {props.children}
        </h1>
        <hr className="border-2 border-purple-500"/>
      </div> 
    )
}