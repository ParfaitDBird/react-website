import { useState,useEffect } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

const App = () =>{
  const [searchField,setSearchField] = useState('');
  const [monsters,setMonsters] = useState([]);
  const [filteredMonsters,setFilteredMonsters] = useState(monsters);
  // console.log('render')

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then((users) => setMonsters(users) 
  );
  },[]);

  useEffect(() =>{
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredMonsters(newFilteredMonsters);

    console.log('effect is firing')
  },[monsters, searchField])

  

  const onSearchChange  = (event) =>{
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };
  


  return(
      <div className="App">
      <h1 className='app-title'>Monsters Rolodex</h1>
       <SearchBox className={'monster-search-box'} onChangeHandler={onSearchChange} placeholder={'Search monsters'}/> 
      <CardList monsters={filteredMonsters}/> 
    </div>
  )
}



// class App extends Component{

//   constructor(){
//     super(); // calls the constructor method OF Component
//     this.state = {
//         monsters:[],
//         searchField: '',
//     }
//     console.log('constructor')
//   }
// //used when we want to get data from api
//   componentDidMount(){
//     console.log('componentDidMount')
//     fetch('https://jsonplaceholder.typicode.com/users')
//         .then(response => response.json()
//         .then((users)=> this.setState(()=>{
//           return {monsters: users}
//         }
//         ,
//         () => {
//           console.log(this.state)
//         }
//         ))
//         );
//   }


//   onSearchChange = (event) => {
//     console.log(event.target.value);
//     const searchField = event.target.value.toLocaleLowerCase();
//     this.setState(()=> {
//           return { searchField }
//     })

// }


// render(){

//   console.log('render');
//   const { monsters, searchField} = this.state;
//   const { onSearchChange } = this;
//   const filteredMonsters = monsters.filter((monster) => {
//     return monster.name.toLocaleLowerCase().includes(searchField);
//   });
//   return (
    
//     <div className="App">
//       <h1 className='app-title'>Monsters Rolodex</h1>
//       <SearchBox className={'monster-search-box'} onChangeHandler={onSearchChange} placeholder={'Search monsters'}/> 
//       <CardList monsters={filteredMonsters}/>
//     </div>
//   );
// }
// }


export default App;
