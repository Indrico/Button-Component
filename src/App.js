import './App.css';
import Button from './Components/Button';

function App() {
  return (
    <div className="container">
      <div className="two-columns">
        <Button name="<Button />" />
        <Button name="&:hover, &:focus" backgroundColor="rgb(172,172,172)" />
        <Button name={`<Button variant="outline"/>`} variant="outline" />
        <Button name="&:hover, &:focus" backgroundColor="#EAEFFF" variant="outline" />
        <Button name={`<Button variant="text"/>`} variant="text" />
        <Button name="&:hover, &:focus" backgroundColor="#EAEFFF" variant="text" />
        <Button name={`<Button disableShadow/>`} disableShadow="true" />
        <Button name={`<Button disabled/>`} disabled="disabled" />
        <Button name={`<Button variant="text" disabled/>`} variant="text" disabled="disabled" />
        <Button name={`<Button startIcon="local_grocery_store"/>`} startIcon="local_grocery_store" iconName="local_grocery_store"/>
        <Button name={`<Button endIcon="local_grocery_store"/>`} endIcon="local_grocery_store" iconName="local_grocery_store"/>
        <Button name={`<Button startIcon="access_time_icon"/>`} startIcon="access_time_icon" iconName="access_time_icon"/>
        <Button name={`<Button endIcon="access_time_icon"/>`} endIcon="access_time_icon" iconName="access_time_icon"/>
      </div>
      <div className="three-columns">
        <Button name={`<Button size="sm"/>`} size="sm"/>
        <Button name={`<Button size="md"/>`} size="md"/>
        <Button name={`<Button size="lg"/>`} size="lg"/>
      </div>
      <div className="four-columns">
        <Button name={`<Button color="default"/>`} color="default"/>
        <Button name={`<Button color="primary"/>`} color="primary"/>
        <Button name={`<Button color="secondary"/>`} color="secondary"/>
        <Button name={`<Button color="danger"/>`} color="danger"/>
        <Button name="&:hover, &:focus" backgroundColor="rgb(172,172,172)"/>
        <Button name="&nbsp;" backgroundColor="#0039CB" color="primary"/>
        <Button name="&nbsp;" backgroundColor="#1C313A" color="secondary"/>
        <Button name="&nbsp;" backgroundColor="#9A0007" color="danger"/>
      </div>
    </div>
  );
}

export default App;
