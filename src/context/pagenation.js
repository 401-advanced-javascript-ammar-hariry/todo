
import React,{useState , useEffect} from 'react';
import useForm from '../hooks/custom-form.js';
export const FilterContext = React.createContext();

function FilterProvider(props){
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage] = useState(4);
      
	let data = [];
      
	let temp;
	let [toDoData, handleGet] = useForm(temp);
	handleGet();
	Object.keys(toDoData).map((val, idx) => {
		data.push(toDoData[val])
	});
	useEffect(() => {
	setLoading(true);
      
	    setPosts(data);
	    setLoading(false);
	})
	const indexOfLastPost= currentPage * postsPerPage;
	const indexOfFirstPost= indexOfLastPost - postsPerPage;
	const currentPosts=posts.slice(indexOfFirstPost, indexOfLastPost);
	const allPosts=data.length;
      
	const state = {
      
	    indexOfLastPost,
	    indexOfFirstPost,
	    currentPosts,
	    allPosts
	};
	return (
	      <FilterContext.Provider value={state}>
	        {props.children}
	      </FilterContext.Provider>
	    );
}

export default FilterProvider;