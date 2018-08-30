import React, { Component } from 'react';

import vueImg from '../static/vue.png'
import quasarImg from '../static/quasar.png'
import reactImg from '../static/react.png'
import scrapyImg from '../static/scrapy.png'
import nodeImg from '../static/node.png'
import laravelImg from '../static/laravel.png'

import Box from './Box'

export default class Habilities extends Component {
    habilities = [
        {
            title: "React.js",
            src: reactImg,
            link: "https://reactjs.org"
        },
        {
          title: "Vue.js",
          src: vueImg,
          link: "https://vuejs.org/"
        },
        {
            title: "Node",
            src: nodeImg,
            link: "https://nodejs.org"
        },
        {
            title: "Laravel",
            src: laravelImg,
            link: "http://laravel.com"
        },
        {
            title: "Quasar",
            src: quasarImg,
            link: "https://quasar-framework.org/"
        },
        {
            title: "Scrapy",
            src: scrapyImg
        }
      ]
    render(){
        return <div class="container-fluid" style={{display:"inline-block"}}>   
        {
            this.habilities.map(hab => <Box key={hab.title} title={hab.title} src={hab.src} link={hab.link}/>)
        }
        </div>
    }
}