// @ts-nocheck
import { redirect } from '@sveltejs/kit';

export async function handle({ event, resolve }) {

    
  if (event.url.pathname === '/reactphysics') {
    throw redirect(301, 'https://matterjs-physics-simulator.pages.dev/');
  }

  if (event.url.pathname === '/design') {
    throw redirect(301, 'https://drive.google.com/file/d/1iGp7e7sOGcn4BN4rc2nESr9y8dEUv2oB/view?usp=sharing');
  }


  if (event.url.pathname === '/cv') {
    throw redirect(301, 'https://drive.google.com/file/d/1HVJ6sG00SCMZ8-VI4IEGfb4ekPsVenTg/view?usp=sharing');
  }



  
  return resolve(event);
}