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
            <img src={logo} alt="" />
           </span>

          <div className="card-meta">
          <div className="tags">
          <span className="tag company">
            <h4>{company}</h4>
          </span>
         {isNew && <span className="tag new">
            <p>New!</p>
            </span>}
         {isFeatured && <span className="tag featured">
            <p>Featured</p>
            </span>}
           </div>

           <div className="card-title">
            <h2>
             {position}
            </h2>
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
                return <span key={index} onClick={() => handleFilters(tag)}>
                    {tag}
                </span> 
             })

             }
             </div>
        </div>
    )
}

export default JobList