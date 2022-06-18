import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom'
import { Container } from '../Components/Container';

export function Currency() {
  let navigate = useNavigate();

  let handleClick = useCallback(function(e) {
    e.preventDefault()
    navigate('/')
  }, [navigate])

  return (
    <Container title="Crypto List">
      <button onClick={handleClick} className="btn btn-primary">
        Back to the home page
      </button>
    </Container>
  )
}