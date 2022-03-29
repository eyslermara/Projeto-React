import { listenerCount } from 'process';
import { useState } from 'react'
import * as C from './App.styles';
import { Item } from './types/Item';
import { ListItem } from './components/ListItem';
import { AddArea } from './components/AddArea';

const App = () => {
  const [List, setlist] = useState<Item[]> ([
    { id: 1, name: 'Estudar', done: false },
    { id: 1, name: 'Arrumar a casa', done: false },
  ]);

  const handleAddTask = (taskName: string) => {
    let newList = [...List];
    newList.push({
      id: List.length + 1,
      name: taskName,
      done: false
    });
    setlist(newList);

  }
  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>

        <AddArea onEnter={handleAddTask}/>

        {List.map((Item, index)=>(
          <ListItem key={index} item={Item} />
        ))}

      </C.Area>
    </C.Container>

  ); 

}

export default App;