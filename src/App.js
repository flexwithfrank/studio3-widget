import './App.css';
import { Container } from '@mui/material';
import BasicModal from './Modal';

const styles = {
  position: "relative"
}

function App() {
  return (
    <Container disableGutters="true" maxWidth="lg">
      <BasicModal />
      <div>
        <healcode-widget data-type="schedules" data-widget-partner="object" data-widget-id="0f179021470c" data-widget-version="1" >
        </healcode-widget>
        </div>
    </Container>
  );
}

export default App;
