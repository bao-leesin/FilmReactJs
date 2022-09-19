import { Component } from "react";
import  Home  from "~/pages/Home";
import  Auction  from "~/pages/Auction";
import Knowledge  from "~/pages/Knowledge";



const publicRoutes = [
    { path:"/" ,component: Home},
    { path:"/Auction", component: Auction},
    { path:"/Knowledge" ,component: Knowledge}

];

const privateRoutes = {

}

export {publicRoutes,privateRoutes}