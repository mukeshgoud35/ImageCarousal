import './App.css';
import './App.css';
import PicturesDisplay from './Components/PicturesDisplay/PicturesDisplay';
import { SliderData } from './Components/PicturesDisplay/SliderData';

function App() {

  return (
    <div className='App'>
      <p className='Header-style'>Sample Image Carousal With Animation Effect </p>
      <PicturesDisplay  slides = {SliderData} playerNames = {SliderData} />
    </div>
  );
}

export default App;
