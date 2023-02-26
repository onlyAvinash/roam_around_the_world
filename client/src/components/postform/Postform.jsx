import React, { useState } from 'react';
import styles from './Postform.module.css';
import { CSSTransition } from 'react-transition-group';

function Postform() {
  const [destinationName, setDestinationName] = useState('');
  const [destinationAddress, setDestinationAddress] = useState('');
  const [travelExperience, setTravelExperience] = useState('');
  const [images, setImages] = useState([]);
  const [walkingDirections, setWalkingDirections] = useState('');
  const [culture, setCulture] = useState('');
  const [firstTimeExperience, setFirstTimeExperience] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleDestinationNameChange = (e) => {
    setDestinationName(e.target.value);
  };

  const handleDestinationAddressChange = (e) => {
    setDestinationAddress(e.target.value);
  };

  const handleTravelExperienceChange = (e) => {
    setTravelExperience(e.target.value);
  };

  const handleImagesChange = (e) => {
    const files = Array.from(e.target.files);
    Promise.all(files.map((file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.addEventListener('load', (ev) => {
          resolve(ev.target.result);
        });
        reader.addEventListener('error', reject);
        reader.readAsDataURL(file);
      });
    })).then((images) => {
      setImages([...images, ...images]);
    });
  };

  const handleWalkingDirectionsChange = (e) => {
    setWalkingDirections(e.target.value);
  };

  const handleCultureChange = (e) => {
    setCulture(e.target.value);
  };

  const handleFirstTimeExperienceChange = (e) => {
    setFirstTimeExperience(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit the form data to your server or API
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Travel Post</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <CSSTransition
          in={true}
          appear={true}
          timeout={500}
          classNames={{
            appear: styles.fadeAppear,
            appearActive: styles.fadeAppearActive,
          }}
        >
          <label className={styles.label}>
            Destination Name:
            <input type="text" value={destinationName} onChange={handleDestinationNameChange} className={styles.input} />
          </label>
        </CSSTransition>
        <CSSTransition
          in={true}
          appear={true}
          timeout={500}
          classNames={{
            appear: styles.fadeAppear,
            appearActive: styles.fadeAppearActive,
          }}
        >
          <label className={styles.label}>
            Destination Address:
            <input type="text" value={destinationAddress} onChange={handleDestinationAddressChange} className={styles.input} />
          </label>
        </CSSTransition>
        <CSSTransition
          in={true}
          appear={true}
          timeout={500}
          classNames={{
            appear: styles.fadeAppear,
            appearActive: styles.fadeAppearActive,
          }}
        >
          <label className={styles.label}>
            Travel Experience:
            <textarea value={travelExperience} onChange={handleTravelExperienceChange} className={styles.textarea}></textarea>
      </label>
    </CSSTransition>
    <CSSTransition
      in={images.length > 0}
      appear={true}
      timeout={500}
      classNames={{
        appear: styles.fadeAppear,
        appearActive: styles.fadeAppearActive,
      }}
    >
      <div className={styles.imagesContainer}>
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Travel photo ${index + 1}`} className={styles.image} />
        ))}
      </div>
    </CSSTransition>
    <CSSTransition
      in={true}
      appear={true}
      timeout={500}
      classNames={{
        appear: styles.fadeAppear,
        appearActive: styles.fadeAppearActive,
      }}
    >
      <label className={styles.label}>
        Add Images:
        <input type="file" accept="image/*" multiple onChange={handleImagesChange} className={styles.input} />
      </label>
    </CSSTransition>
    <CSSTransition
      in={true}
      appear={true}
      timeout={500}
      classNames={{
        appear: styles.fadeAppear,
        appearActive: styles.fadeAppearActive,
      }}
    >
      <label className={styles.label}>
        Walking Directions:
        <textarea value={walkingDirections} onChange={handleWalkingDirectionsChange} className={styles.textarea}></textarea>
      </label>
    </CSSTransition>
    <CSSTransition
      in={true}
      appear={true}
      timeout={500}
      classNames={{
        appear: styles.fadeAppear,
        appearActive: styles.fadeAppearActive,
      }}
    >
      <label className={styles.label}>
        Culture:
        <textarea value={culture} onChange={handleCultureChange} className={styles.textarea}></textarea>
      </label>
    </CSSTransition>
    <CSSTransition
      in={true}
      appear={true}
      timeout={500}
      classNames={{
        appear: styles.fadeAppear,
        appearActive: styles.fadeAppearActive,
      }}
    >
      <label className={styles.label}>
        First Time Experience:
        <textarea value={firstTimeExperience} onChange={handleFirstTimeExperienceChange} className={styles.textarea}></textarea>
      </label>
    </CSSTransition>
    <CSSTransition
      in={true}
      appear={true}
      timeout={500}
      classNames={{
        appear: styles.fadeAppear,
        appearActive: styles.fadeAppearActive,
      }}
    >
      <label className={styles.label}>
        Name:
        <input type="text" value={name} onChange={handleNameChange} className={styles.input} />
      </label>
    </CSSTransition>
    <CSSTransition
      in={true}
      appear={true}
      timeout={500}
      classNames={{
        appear: styles.fadeAppear,
        appearActive: styles.fadeAppearActive,
      }}
    >
      <label className={styles.label}>
        Email:
        <input type="email" value={email} onChange={handleEmailChange} className={styles.input} />
      </label>
    </CSSTransition>
    <CSSTransition
      in={true}
      appear={true}
      timeout={500}
      classNames={{
        appear: styles.fadeAppear,
        appearActive: styles.fadeAppearActive,
      }}
    >
      <button type="submit" className={styles.button}>Submit</button>
    </CSSTransition>
  </form>
</div>
);
}

export default Postform;