import { redirect } from '@sveltejs/kit';
 
export function load() {
    window.open('/Resume_RayGong.pdf', '_blank')?.focus()
    // throw redirect(301, '/Resume_RayGong.pdf');
}