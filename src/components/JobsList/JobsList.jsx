const JobList = (  
    {
    id,
    logo,
    company,
    position,
    postedAt,
    contract,
    location,
    featured: isFeatured,
    new: isNew,
    handleFilters,
    jobTags
}) => {
    
    return (
        
        <div key={id} className="card-container">
      {isFeatured && <div className="card-highlight"></div>}
           <span  className="card-icon">
            <img src={`../..${logo}`} alt="" />
           </span>

          <div className="card-meta">
          <div className="tags">
          <div className="tag company">
            <h4>{company}</h4>
          </div>
         {isNew && <div className="tag new">
            <p>New!</p>
            </div>}
         {isFeatured && <div className="tag featured">
            <p>Featured</p>
            </div>}
           </div>

           <div className="card-title">
            <h1>
             {position}
            </h1>
           </div>

           <div className='card-info'>
            <span>{postedAt}  .</span>
            <span>  {contract}  .</span>
            <span>  {location}</span>
           </div>
          </div>
             <div  className="break-line"></div>
             <div className="filters">
             {jobTags.map((tag,index) => {
                return <div key={index} onClick={() => handleFilters(tag)}>
                    {tag}
                </div> 
             })

             }
             </div>
        </div>
    )
}

export default JobList