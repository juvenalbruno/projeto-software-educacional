import { CardModule } from '../components/CardModule';
import { Container } from './styles';
import db_modules from '../../db/modules.json';

function Home() {
  return (
   <Container>
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
