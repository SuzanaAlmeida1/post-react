import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment(){
  return (
    <div className={styles.comment}>

    <img src="https://github.com/SuzanaAlmeida1.png"/>

     <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Suzana Almeida</strong>
              <time title="06 de abril de  2023 às 21:01" dateTime="06-04-2023 21:01:30">Cerca de 1h atrás</time>
            </div>

            <button title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>
             <p>Muito bom Devon, parabéns!! 👏👏</p>

        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>


     </div>

    </div>
  )
}