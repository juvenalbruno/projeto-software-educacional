import { CardModule } from '../components/CardModule';
import { Container, Hr } from './styles';
import db_modules from '../../db/modules.json';

function Home() {
  return (
   <Container>
      <Hr />

      <h2>Unidade 1 - Identidade e Cultura</h2>

      <Hr />

      <div className='cards'>
        {db_modules.map(({ id, name, img, blocked }) => {
          return(
            <CardModule
              key={id}
              moduleId={id}
              moduleName={name} 
              moduleImg={img}
              blocked={blocked}
            />
          )
        })}
      </div>
   </Container>
  );
}

export { Home };
