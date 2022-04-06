import { useState } from 'react';
import './App.css';
import Modal from './Modal';

function App() {
  let [showModal, setshowModal] = useState(false);
  function handleClick() {

    setshowModal(!showModal)
  };





  return (
    <div className="App">
      <button onClick={handleClick}>Show Modal</button>
      <div className="lorem App-header">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam facere fuga tenetur, incidunt natus in qui, officia ullam iure maiores delectus omnis voluptas! Natus, labore illo fugit voluptate recusandae nemo.</div>
      <div className="lorem App-header">Explicabo ipsam dolore ad optio nemo a ipsa debitis esse harum quam, labore vel perferendis beatae ex laborum unde. Quas magnam sit esse doloribus impedit similique non quo libero deleniti?</div>
      <div className="lorem App-header">Cumque quam saepe exercitationem alias esse mollitia hic accusamus tempora incidunt velit quod repudiandae dolorum vel, quasi consequuntur neque, nostrum accusantium? Unde quidem eos quod hic doloremque error minima sequi!</div>
      <div className="lorem App-header">Molestiae, voluptatibus laudantium neque cum reiciendis sed, voluptatum perspiciatis, totam animi nihil laborum voluptate? Asperiores eos laboriosam harum nemo odit numquam, earum enim optio voluptas architecto officia rem nulla ab?</div>
      <div className="lorem App-header">Labore similique nemo obcaecati, accusantium atque numquam adipisci eligendi voluptatibus perspiciatis error quas aspernatur perferendis eum aliquid illo soluta incidunt expedita quibusdam veritatis officiis maiores vero nesciunt quo enim. Eum?</div>
      {showModal && <Modal handleClick={handleClick} />}
    </div>
  );
}

export default App;
