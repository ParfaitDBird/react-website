import './search-box.styles.css'

const SearchBox = ({classname,placeholder,onChangeHandler}) =>(
  <input 
  className={`search-box ${classname}`}
  type={'search'} 
  placeholder={placeholder}
  onChange={onChangeHandler}
/>
)
// class SearchBox extends Component {
//   render(){
//       return(
     
//       )
//   }

// }

export default SearchBox;