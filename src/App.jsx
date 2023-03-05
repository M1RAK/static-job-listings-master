import React,{ useState } from 'react'
import FilterTab from './components/FilterTab/FilterTab';
import JobsList from './components/JobsList/JobsList';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import JobsData from './data.json'

import './styles/style.css'

function App() {
  
  const [filters,setFilters] = useState([]);

  const handleFilters = (tag) => {
    if(filters.indexOf(tag) === -1){
      setFilters(prevFilter => [...prevFilter, tag])
    } 
  }

  function clearTags(){
    setFilters([]);
  }

  function removeTag(tag){
    setFilters(prevFilter => prevFilter.filter(filter => filter !== tag))
  }


  return (
    <div className="App">
      <Header/>
      {filters.length > 0 && <FilterTab
      filters={filters}
      clearTags={clearTags}
      removeTag={removeTag}
      />}

      {
        JobsData.map((jobs) => {
          let jobTags = [jobs.role,jobs.level, ...(jobs.languages) || [], ...(jobs.tools) || []];

          // The magic: it takes every filter pushed into the filters[]
          //  and checks if it is contained in the jobtags and only returns jobs that contain the filter.
          let filterJobs = (jobTags, filters) => 
            filters.every((value) => jobTags.includes(value));
         
            return !filters.length ? (
              <JobsList 
              key={jobs.id}
              {...jobs}
              handleFilters={handleFilters}
              jobTags={jobTags}
              />
            )

            :

            (filterJobs(jobTags,filters) && (
                <JobsList 
                key={jobs.id}
                {...jobs}
                handleFilters={handleFilters}
                jobTags={jobTags}
                />
              ))
        })
      }
      <Footer />
    </div>
  )
}

export default App
