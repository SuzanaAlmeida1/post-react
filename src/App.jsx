//extensão JSX = Java script + XML
//Cmponente é uma função que retorna um HTML


import {Header} from './components/Header';
import {Post} from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';
import './global.css';


export function App() {
 

  return (
    
    <div>

      <Header />
        <div className={styles.wrapper}>
          
        <Sidebar />
          
          <main>
          <Post 
            author="Su" 
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ab tenetur totam dolorum officia inventore sapiente culpa. Molestias adipisci fugit sapiente numquam optio quis, deleniti perspiciatis hic, commodi debitis officia?"  
         />
         <Post 
             author="Edu" 
             content="Um novo post!" 
          />
         </main>
        </div>
    </div>
  )
}


//export default App
