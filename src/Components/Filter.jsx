import { useCallback } from "react";

function Filter({onChange}) {

  const handleChange = useCallback((e) => {
    onChange(e.target.value.trim().toLowerCase())
  }, [onChange])

  return ( 
    <div className="row">
      <div className="col-12 col-sm-8 col-md-6 offset-sm-2 offset-md-3 my-3">
        <input type="text" className='form-control' onChange={handleChange} placeholder='Search for a currency...' />
      </div>
    </div>
   );
}

export default Filter;