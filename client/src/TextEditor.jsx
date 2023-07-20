import React, { useCallback, useEffect } from 'react'
import Quill from "quill";
import 'quill/dist/quill.snow.css'
import './style.css'



export default function TextEditor() {



const wrapperRef = useCallback(wrapper =>{
  if(wrapper ==null ) return 

  wrapper.innerHTMl = ''
  const editor = document.createElement('div')
  wrapper.append(editor)
  new Quill(editor,{theme : 'snow'})


},[])     

  return (
    <div className='container' ref={wrapperRef}></div>
  )
}
