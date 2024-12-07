import React, { useState } from 'react';

function App() {

  const [bucket1, setBucket1] = useState(['Item1', 'Item2', 'Item3']);
  const [bucket2, setBucket2] = useState(['Item4', 'Item5']);
  const [selectedItem, setSelectedItem] = useState(null);  


  const selectItem = (item) => {
    setSelectedItem(item);
  };


  const addItem = () => {
    if (selectedItem && bucket1.includes(selectedItem)) {
      setBucket1(bucket1.filter(i => i !== selectedItem)); 
      setBucket2([...bucket2, selectedItem]);  
      setSelectedItem(null); 
    }
  };

 
  const removeItem = () => {
    if (selectedItem && bucket2.includes(selectedItem)) {
      setBucket2(bucket2.filter(i => i !== selectedItem)); 
      setBucket1([...bucket1, selectedItem]); 
      setSelectedItem(null);
    }
  };

  const addAll = () => {
        setBucket2([...bucket2,...bucket1])
        setBucket1([])
  }
  const removeAll = () => {
    setBucket1([...bucket1,...bucket2])
    setBucket2([])
  }
  return (
    <>
      <div className='container'>
        <div>
          
          <div className='container1'>
          <h1>Bucket 1</h1>
            {bucket1.map((item, index) => (
              <div
                key={index}
                className={`item ${item === selectedItem ? 'selected' : ''}`}
                onClick={() => selectItem(item)}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className='controls'>
          <h2>Move Items</h2>
          <button onClick={addItem} className='btn' disabled={!selectedItem}>Add</button>
          <button onClick={removeItem} className='btn' disabled={!selectedItem}>Remove</button>
          <button onClick={addAll} className='btn' disabled={bucket1.length===0}>AddAll</button>
          <button onClick={removeAll} className='btn' disabled={bucket2.length===0}>RemoveAll</button>
        </div>

        <div className='container2'>
          <h1>Bucket 2</h1>
          {bucket2.map((item, index) => (
            <div
              key={index}
              className={`item ${item === selectedItem ? 'selected' : ''}`}
              onClick={() => selectItem(item)}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
