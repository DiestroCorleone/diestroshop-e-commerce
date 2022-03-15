import React from 'react';

export default function Footer() {
  return (
    <footer className="back-quaternary font-bold padded-hard color-secondary">
      <small>
        Developed with &#9829; by
        <a
          href="https://diestrocorp.com.ar"
          target="_blank"
          title="DiestroCorp"
        >
          DiestroCorp
        </a>{' '}
        - <span>{new Date().getFullYear()}</span>
      </small>
    </footer>
  );
}
