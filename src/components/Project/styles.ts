import styled from "styled-components";

export const Container = styled.section`
  margin-top: 15rem;
  
  h2{
    text-align: center;
    font-size: 4rem;
    margin-bottom: 3rem;
  }
  .projects{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    gap: 2rem;
    padding: 1rem;
    overflow: hidden;

    .project{
      // padding: 2rem 1.8rem;
      // background-color: #2b2b2b;
      // border-radius: 1.2rem;
      // transition: 0.25s;
      // display: flex;
      // flex-direction: column;
      // height: 100%;
      // color: #FFF;
      // &:hover{
      //   transform: translateY(-5px);
      //   background-color: var(--pink);
      // }

  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);

  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 1.2rem;
display: flex;
 padding: 2rem 1.8rem;
  transition: 0.25s;
  flex-direction: column;
  height: 100%;
  color: black;
}

.project:hover {
  transform: translateY(-5px);
  box-shadow: 0 0 25px rgba(35, 206, 107, 0.4);
}








      header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        // color: var(--blue);
        margin-bottom: 3.6rem;
        .project-links{
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        a > img {
          width: 5.0rem;
        }
      }
      
      h3{
        margin-bottom: 2rem;
      }

      p{
        letter-spacing: 0.12rem;
        margin-bottom: 2rem;
        a{
          color: #FFFF;
          border-bottom: 1px solid var(--green);
          transition: color 0.25s;
          &:hover{
            color: var(--green);
          }
        }
      }

      footer{
        margin-top: auto;
        .tech-list{
          display: flex;
          align-items: center;
          gap: 2rem;
          font-size: 1.4rem;
          opacity: 0.6;
        }
      }

    }
  }

  @media (max-width: 960px){
    .projects{
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 740px){
    .projects{
      grid-template-columns: 1fr;
    }
  }
`


