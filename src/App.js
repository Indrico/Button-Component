import './App.css';
import Button from './Components/Button';

function App() {
  return (
    <div className="container">
      <Button name="<Button />"/>
      <Button name="&:hover, &:focus" backgroundColor="rgb(172,172,172)"/>
      <Button name={`<Button variant="outline"/>`} variant="outline"/>
      <Button name="&:hover, &:focus" backgroundColor="#EAEFFF" variant="outline"/>
      <Button name={`<Button variant="text"/>`} variant="text"/>
      <Button name="&:hover, &:focus" backgroundColor="#EAEFFF" variant="text"/>
      <Button name={`<Button disableShadow/>`} />
    </div>
  );
}

export default App;
