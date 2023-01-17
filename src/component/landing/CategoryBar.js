
import React,{useState} from 'react'
import './categoryBar.css';
const keywords = [
    'All',
    'Fitness',
    'Yoga',
    'Meditation',
    'Skill',
   
 ]
const CategoryBar = () => {
    const [activeElement, setActiveElement] = useState('All')


    const handleClick = value => {
       setActiveElement(value)
 
    }
    return (
        <div className="categoriesBar">
        
        {keywords.map((value, i) => (
            <span className="ml-5"
               onClick={() => handleClick(value)}
               key={i}
               className={activeElement === value ? 'active' : ''}>
               {value}
            </span>
         ))}
     </div>
    )
}

export default CategoryBar;