import React from 'react';
import Form from '../components/Form'
import content from '../content/Contact.json'

export default class Contact extends React.Component {
  render() {
    return (
      <div>

        <div className="mb-32 max-w-2xl">
          <h1 className="text-xl">
            Need a solid designer/developer hybrid for your next project? ..or do you just want to send me memes?
          </h1>
        </div>

        <div className="flex">

          <div className="lg:w-1/3">
            <h3 className="mb-3 text-3xl font-sans font-bold">
              <span className="mr-2" role="img" aria-label="emoji">👨🏻‍💻</span> Let's Talk Shop
            </h3>
            <p className="mb-16">Have a project? Hit me up.</p>
            <Form />
          </div>

          <div className="bg-gray-200 flex mx-24" style={{width: '2px'}}></div>

          <div className="lg:w-1/2">
            <h3 className="mb-3 text-3xl font-sans font-bold">
              <span className="mr-2" role="img" aria-label="emoji">🍻</span> Let's Get Social
            </h3>
            <p className="mb-16">I'm not joking about them memes.</p>
            <div className="flex flex-wrap -mx-4">
              {
                content.social.map( site => {
                  return (
                    <div className="w-1/2 mb-4 px-2 flex">
                      <a
                        href={site.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full card p-8 hover:border-black hover:shadow-xl">
                        <p className="text-lg text-black">{site.label}</p>
                        <p className="text-xs">{site.username}</p>
                      </a>
                    </div>
                  )
                })
              }
            </div>
          </div>

        </div>
      </div>
    )
  }
}
