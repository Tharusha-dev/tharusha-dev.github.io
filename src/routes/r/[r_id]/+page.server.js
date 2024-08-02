// @ts-nocheck
import { redirect } from "@sveltejs/kit";

// @ts-ignore
export async function load({ params }) {

    const redirects = {
        "cv" : "https://drive.google.com/file/d/1HVJ6sG00SCMZ8-VI4IEGfb4ekPsVenTg/view?usp=sharing",
        "reactphysics" : "https://matterjs-physics-simulator.pages.dev/",
        "design" : "https://drive.google.com/file/d/1iGp7e7sOGcn4BN4rc2nESr9y8dEUv2oB/view?usp=sharing"
    }


    let redirectId = params.r_id

    if (redirectId in redirects) {
        throw redirect(301, redirects[redirectId]);
    } else {
        throw error(404, 'Not found');
    }
}





 