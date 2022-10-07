import React, { useState } from 'react'

function useInput(initialValue="") {
    const [ value, setValue] = useState(initialValue);
    const bind = {
        onChange: ( event ) => {
            setValue(event.target.value)
        },
        value: value,
        
    }
  return [ value, bind ]
}

export default useInput