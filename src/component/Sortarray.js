import React from 'react'

function Sortarray({data}) {
    console.log(data);
  return (
    <div>
        <h1>sub component</h1>
        {data.map((ele)=>(
            <div>
                {ele.upvotes}{"------"}{ele.date}{"------"}{ele.title}
            </div>
        ))}
    </div>
  )
}

export default Sortarray