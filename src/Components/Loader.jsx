import { Container } from "./Container";

function Loader({title}) {
  return ( 
    <Container title={title}>
      <div className="text-cent">
        <p>Loading...</p>
      </div>
    </Container>
   );
}

export default Loader;