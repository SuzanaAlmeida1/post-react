import styles from './Post.module.css';


export function Post(){
  return (
  <article className={styles.post}>
    <header>
      <div className={styles.author}>
        <img src="https://github.com/SuzanaAlmeida1.png"/>
        <div className={styles.authorInfo}></div>
        <strong>Suzana Almeida</strong>
        <span>Web Developer</span>
      </div>

      <time title="06 de abril de  2023 às 21:01" dateTime="06-04-2023 21:01:30"></time>
    </header>

    <div className={styles.content}>
      <p>Fala galeraa 👋</p>
      <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, 
        evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
      <p>👉{"  "}<a href="">jane.design/doctorcare</a></p>
      <p>
        <a href="">#novoprojeto</a>
        <a>#nlw</a>{"  "} 
        <a>#rocketseat</a>
      </p>
    </div>

  </article>
  )
}