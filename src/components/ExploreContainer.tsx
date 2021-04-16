import React from 'react'

const ExploreContainer: React.FC = () => {
  return (
    <>
      <div className="container">
        <strong>Ready to create an app?</strong>
        <p>
          Start with Ionic{' '}
          <a
            href="https://ionicframework.com/docs/components"
            rel="noopener noreferrer"
            target="_blank"
          >
            UI Components
          </a>
        </p>
      </div>
      <style jsx>{`
        .container {
          text-align: center;
          position: absolute;
          left: 0;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
        }

        .container strong {
          font-size: 20px;
          line-height: 26px;
        }

        .container p {
          font-size: 16px;
          line-height: 22px;
          color: #8c8c8c;
          margin: 0;
        }

        .container a {
          text-decoration: none;
        }
      `}</style>
    </>
  )
}

export default ExploreContainer
