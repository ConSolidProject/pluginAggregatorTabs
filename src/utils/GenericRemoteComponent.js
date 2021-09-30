import React, {useRef, useEffect} from 'react'

export default ({mount, sharedProps, module, children, inactive}) => {
    const ref = useRef(null)
    useEffect(() => {
        mount(ref.current, {sharedProps, module, children, inactive})
    })
    return <div ref={ref}/>
}