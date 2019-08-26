import React from 'react';
import content from '../content/Home.json'

export default class Home extends React.Component {
  render() {
    return (
      <div>

        <div className="mb-24 max-w-2xl">
          <h1 className="text-xl">I'm Jesse, a UI/UX designer and front-end developer extraordinaire ~ have a slice.</h1>
        </div>

        <div className="flex flex-wrap -mx-5">
          {
            content.map( item => {

              const imageURL = require('../assets/logo-'+item.route+'.png')
              const imageStyles = {
                backgroundImage: `url(${imageURL})`,
                backgroundSize: `35%`
              }

              return (
                <a
                  className="px-5 mb-12 w-full lg:w-1/2 xl:w-1/3"
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="card itemWrap flex flex-col hover:border-black hover:shadow-xl w-full h-full cursor-pointer">
                    <div className="logoWrap h-64 rounded-t bg-center border-b bg-no-repeat flex items-start" style={imageStyles}>
                      <div className="text-xs m-2 text-gray-400">
                        { item.link.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "").split('/')[0] }
                      </div>
                    </div>
                    <div className="p-8 flex flex-col flex-1">
                      <h2 className="text-2xl text-black font-bold mb-6 font-sans">{item.label}</h2>
                      <p className="text-sm mb-10">{item.desc}</p>
                      <p className="text-xs mt-auto">Role: { item.role }</p>
                    </div>
                  </div>
                </a>
              )
            })
          }
        </div>

      </div>
    )
  }
}
