import TabClose from '/assets/icon-remove.svg'

const FilterTab = ({clearTags,removeTag,filters}) => {
    return (
        <div className='filter-container'>
          <div className="filter-tab">
           {
            filters?.map((tag, index) => {
              return (
                <div key={index} className='tab'>
                <span className="tab-title">
                   {tag}
                </span>
              <span onClick={() => {removeTag(tag)}} className="tab-close">
                <img src={TabClose} alt="icon-remove" />
              </span>
            </div>
              )
            })
           }
              

            <span onClick={() => {clearTags()}} className="clear-btn">Clear</span>
          </div>
        </div>
    )
}

export default FilterTab