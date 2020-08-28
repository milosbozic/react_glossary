import React, {useState} from 'react';
import Search from './components/Search';
import Terms from './components/Terms'
import Letters from './components/Letters';
import Details from './components/Details';
import glossary from './components/data/glossary.json'

function App() {

  const terms = glossary.Terms;
  const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  const[searchWord, setWord] = useState('');
  const[filterDisplay, setFilterDisplay] = useState(terms);
  const[detailView, setDetailViewState] = useState(false);
  const[selectedTerm, setSelectedTerm] = useState('####');

  function changeSearchWord(e){

    setDetailViewState(false);
    setSelectedTerm('####');

    let oldList = terms.map(term => {
      return {
          name: term.name.toLowerCase(), description: term.description
      };
    });

    if (e !== ""){
          
      setWord(e.target.value);

      let newList = [];

      newList = oldList.filter(term => 
        term.name.includes(e.target.value.toLowerCase())
      );

      setFilterDisplay(newList.slice(0, 10));
      
    } else {
      setWord('');
      setFilterDisplay(terms.slice(0, 10));
    }
  }

  function selectLetter(letter){

    setDetailViewState(false);
    setSelectedTerm('####');

    let oldList = terms.map(term => {
      return {
          name: term.name.toLowerCase(), description: term.description
      };
    });

    let newList = [];

    if(letter !== ""){
      setWord(letter.toLowerCase());
      
      newList = oldList.filter(term => 
        term.name.startsWith(letter.toLowerCase())
      );

        setFilterDisplay(newList.slice(0, 10));
    }
    else {
      setWord('');

      setFilterDisplay(terms.slice(0, 10));
    }
  }

  function setDetailView(term_name){
    setDetailViewState(true);
    setSelectedTerm(term_name);
  }

  
  return(
    <div>
      
      <div className="container">
      <h2>AI & Data Science Bussines Glossary</h2>
        <div className='row search'>
          <Search searchWord={searchWord} changeSearchWord={changeSearchWord}/>
        </div>
        <div className="row">
          <div className="col-10">
            {!detailView && <Terms filterDisplay={filterDisplay} setDetailView={setDetailView}/>}
            {detailView && <Details selected={selectedTerm} terms={terms}/>}
          </div>
          <div className='col-1'>

          </div>
          <div className="col-1">
            <Letters letters={letters} selectLetter={selectLetter} />
          </div>
        </div>
    </div>
  </div>
  );
};

export default App;