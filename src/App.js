import React from 'react';
import './App.css';
import useDarkMode from './hooks/useDarkMode';
function App() {
  const [isDarkMode, setdarkMode] = useDarkMode();
  return (
    <div className="App">
      <nav className="navigation">
        <div className="logo">Dark Mode</div>
        <button className="toggle-btn" onClick={() => setdarkMode(!isDarkMode)}>
          Toggle
        </button>
      </nav>
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>{' '}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, placeat
        adipisci aut repudiandae molestias quis possimus dignissimos tenetur
        tempore numquam, eos, sed deleniti quae voluptas asperiores harum labore
        ab deserunt? Perspiciatis, quisquam totam sapiente dolore cum, officiis
        veritatis sed ut quidem corrupti animi! Officiis animi quaerat officia
        ducimus, eveniet magnam delectus cupiditate amet vero aspernatur
        perferendis dolorem dignissimos praesentium vitae. Architecto dolorem
        eius distinctio nostrum fugit! Quas molestias, unde possimus vitae
        totam, quam eum earum est inventore harum aperiam praesentium sapiente
        repellat minima dolor corrupti eligendi, tempore reprehenderit animi
        delectus. Perferendis, et maxime reprehenderit possimus numquam
        corrupti, libero sed veniam optio vel a voluptates? Vel deserunt a animi
        saepe, dolores consequatur obcaecati ratione odio, ducimus repellendus
        aperiam error, laborum sed. Aspernatur excepturi vitae sint doloremque
        unde ipsa veniam placeat debitis? Aspernatur reprehenderit quibusdam
        pariatur fuga numquam voluptate magni praesentium optio nisi repellat
        placeat maxime at similique, provident, consequuntur, corrupti adipisci!
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis tempora
        maiores fugiat neque doloribus illum omnis expedita aliquam voluptatum
        possimus ad mollitia laudantium, non cumque quia, illo tempore odit
        veniam! Nisi enim, eligendi error quod dicta sunt fugit non et. Repellat
        corporis officiis odio repudiandae doloremque similique quisquam dicta
        enim, porro sed assumenda architecto iste accusantium quo quod, in
        incidunt? Eaque ipsum, id commodi reprehenderit quam exercitationem ad
        iure a cum necessitatibus corporis quas, odit, deserunt atque reiciendis
        deleniti fuga et laudantium officia adipisci. Voluptates, nesciunt!
        Repellendus consequuntur voluptate vero? Officia quaerat voluptates
        dolorem provident excepturi expedita nostrum, voluptas consequatur
        architecto. Vel recusandae officia quidem impedit magni cupiditate?
        Deserunt qui velit totam dolorem delectus necessitatibus possimus
        explicabo veritatis doloremque sequi. Optio, quod quaerat fugiat
        recusandae officia earum voluptatem aliquam unde obcaecati laborum
        necessitatibus porro omnis laboriosam esse, illum numquam quibusdam
        magnam. Voluptate et nesciunt quisquam sequi perferendis minus quaerat
        temporibus!
      </p>
    </div>
  );
}

export default App;
