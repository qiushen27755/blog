import React from 'react'
import { Redirect} from 'react-router-dom'
import BlogHeader from '../component/header'

import BlogHome from '../application/home' 
import BlogTags from '../application/tags' //标签
import BlogIdea from '../application/idea'//分类
import BlogRecord from '../application/record'// 归档
import BlogAbout from '../application/about'// 关于我

import BlogInfo from '../component/blogInfo'

export default[
    {
        path:'/',
        component : BlogHeader,
        
        routes:[
            { path :'/', exact:true , render:()=> (<Redirect to={'/home'} />)},
            { path : '/home' , component : BlogHome},
            { path : '/about' , component : BlogAbout },
            { path : '/record', component : BlogRecord},
            { path : '/Idea' , component : BlogIdea},
            { path : '/tags' , component : BlogTags},
            { path : '/blogInfo/:id', component: BlogInfo}
        ]
    }
]